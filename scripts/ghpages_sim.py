#!/usr/bin/env python3
"""
模拟 GitHub Pages 的静态路由行为，用于在本地验证路由类改动。

用途：本仓是 GitHub Pages 托管 + trailingSlash:false，路由行为有坑（见下）。
      `pnpm serve` 和 `python -m http.server` 都**不能**模拟真实线上行为，
      本脚本是为了消除这个盲区而写的。

用法：
    pnpm build
    python3 scripts/ghpages_sim.py            # 默认 build/ + :8099
    python3 scripts/ghpages_sim.py build 8099

然后 curl 验证：
    curl -o /dev/null -w '%{http_code}' http://127.0.0.1:8099/blog

GitHub Pages 的判定顺序（这是关键，与 python -m http.server 不同）：
  1. GET /X  →  若 build/X.html 存在，直接返回它（200）
  2. GET /X  →  若 build/X/ 目录存在（且无 X.html），301 到 /X/
  3. GET /X/ →  若 build/X/index.html 存在，返回它
  4. GET /X/ →  否则返回 build/404.html，状态码 404（GH Pages 的真实行为）
  5. GET /    →  build/index.html

实测差异（2026-10-29）：
    python -m http.server 会自己 301 到目录、目录无 index 时列出文件列表，
    所以它在 /blog/ 上返回 200 而线上是 404 —— 用它验证路由会得出完全相反的结论。
"""
import http.server
import os
import socketserver
import sys

ROOT = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else "build")
PORT = int(sys.argv[2]) if len(sys.argv) > 2 else 8099


class GHPagesHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))

    def _send_file(self, path, status=200):
        try:
            with open(path, "rb") as f:
                body = f.read()
        except OSError:
            return False
        self.send_response(status)
        ctype = self.guess_type(path)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)
        return True

    def do_GET(self):
        path = self.path.split("?")[0].split("#")[0]
        rel = path.lstrip("/")

        # 根路径
        if rel == "":
            if self._send_file(os.path.join(ROOT, "index.html")):
                return
            return self.send_error(404)

        full = os.path.join(ROOT, rel)

        # 规则 1：X.html 存在 -> 直接返回（即使 X/ 目录也存在）
        if not rel.endswith("/"):
            html_file = full + ".html"
            if os.path.isfile(html_file):
                return self._send_file(html_file)

        # 规则 2：裸路径且目录存在 -> 301 到带斜杠
        if not rel.endswith("/") and os.path.isdir(full):
            self.send_response(301)
            self.send_header("Location", "/" + rel + "/")
            self.end_headers()
            return

        # 规则 3/4：带斜杠 -> 找 index.html，否则 404.html（状态 404）
        if rel.endswith("/"):
            idx = os.path.join(full, "index.html")
            if os.path.isfile(idx):
                return self._send_file(idx)

        if os.path.isfile(full):
            return self._send_file(full)

        # GH Pages 兜底：返回自定义 404 页，状态码保持 404
        p404 = os.path.join(ROOT, "404.html")
        if os.path.isfile(p404):
            return self._send_file(p404, status=404)
        return self.send_error(404)


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", PORT), GHPagesHandler) as httpd:
        sys.stderr.write(f"GHPages-sim serving {ROOT} at http://127.0.0.1:{PORT}/\n")
        httpd.serve_forever()
