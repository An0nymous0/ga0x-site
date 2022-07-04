import React, { useState } from "react"
import Loadable from 'react-loadable'

import Layout from "@theme/Layout";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Devtools() {
  const [toolsConfig] = useState([{
    id: "ToolsgKidU",
    name: "文本行批量添加前后缀"
  }])

  const [currentToolsConfig, setCurrentToolsConfig] = useState(toolsConfig[0])

  function getToolsConfig(id) {
    if(currentToolsConfig.id === id) return currentToolsConfig
    let isExist = false
    for (let config of toolsConfig) {
      if (config.id === id) {
        isExist = true
        setCurrentToolsConfig(config)
      }
    }
    if(!isExist){
      setCurrentToolsConfig(toolsConfig[0])
    }
    return currentToolsConfig
  }

  function ToolsRender(props) {
    const Component = Loadable({
      loader: () => import("../../components/Devtools/" + props.name),
      loading: () => null
    })
    return <Component/>
  }

  return (
    <Layout title="Devtools" description="在线工具">
      <nav className="navbar navbar--primary">
        <div className="navbar__inner">
          <div className="navbar__items">
            <a className="navbar__item navbar__link">Devtools</a>
            <div className="navbar__item dropdown dropdown--hoverable">
              <a className="navbar__link">文本处理</a>
              <ul className="dropdown__menu">
                <li>
                  <a className="dropdown__link" onClick={() => getToolsConfig('ToolsgKidU').id}>{getToolsConfig('ToolsgKidU').name}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Box
        sx={{
          marginTop: '20px',
          marginBottom: '20px',
          justifyContent:'center',
        }}
      >
        <Container>
          <h1>{currentToolsConfig.name}</h1>
          <ToolsRender name={currentToolsConfig.id}/>
        </Container>
      </Box>
    </Layout>
  );
}