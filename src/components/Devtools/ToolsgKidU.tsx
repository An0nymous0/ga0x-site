import React from "react"
import { useForm } from "react-hook-form";
import ClipboardJS from "clipboard";

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}))

var clipboard = new ClipboardJS('#copy');
clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});

export default function ToolsgKidU() {
  const { register, handleSubmit, watch,setValue, formState: { errors } } = useForm({
    defaultValues: {
      input: 'A1\nA2\nA3\nA4',
      prefix: '\'',
      suffix: '\','
    }
  });

  const onSubmit = (data) => {
    var ouputData = "";
    var prefix = data.prefix;
    var suffix = data.suffix;
    data.input.split('\n').forEach(function(v, i) {
      ouputData += prefix + v + suffix + "\r";
    })
    setValue('output',ouputData)
    console.log(ouputData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            id="input"
            label="请输入文本信息："
            multiline
            rows={4}
            fullWidth
            {...register("input")}
          />
        </Grid>
        <Grid item xs={10}>
          <TextField id="prefix" label="前缀" variant="outlined" {...register("prefix")}/>
        </Grid>
        <Grid item xs={10}>
          <TextField id="suffix" label="后缀" variant="outlined" {...register("suffix")}/>
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="output"
            multiline
            rows={4}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            {...register("output")}
          />
        </Grid>
        <Grid item xs={10}>
          <Button variant="outlined" type="submit" className="margin-right--sm">转换</Button>
          <Button id="copy" variant="outlined" data-clipboard-target="#output" >复制</Button>
        </Grid>
      </Grid>
    </form>
  );
}