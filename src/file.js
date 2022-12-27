import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function File(props) {
  const [name, setName] = useState(props.file.name);
  const [type, setType] = useState(props.file.type);
  const [author, setAuthor] = useState(props.file.author);
  const [encoded, setEncoded] = useState(props.file.encoded);
  const saveHandler=()=>{
    const fileProp={
      name,type,author,encoded,edit:false,id:props.file.id?props.file.id:null,
       index:props.index
    }
    props.saveFile(fileProp)
  }

  return (
   <div>
     <div class="flex" >
     <div  class="field">
          <TextField 
          name="name" label=" שם קובץ" required value={name} onChange={(e) => setName(e.target.value)} /> 
        </div>
        <div class="flex" >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">סוג קובץ</InputLabel>
        <Select
          labelId="select-label"
          id="select-file-type"
          name="select-file-type"
          value={type}
          label="סוג קובץ"
          onChange={e => setType(e.target.value)}>
                    
          <MenuItem value={0}>pdf</MenuItem>
          <MenuItem value={1}>docx</MenuItem>
          <MenuItem value={2}>xlsx</MenuItem>
          <MenuItem value={3}>pptx</MenuItem>
          <MenuItem value={4}>jpg</MenuItem>
        </Select>
        </FormControl>
        <div class="field" >
        <TextField name="author" label="מחבר" required value={author} onChange={e => setAuthor(e.target.value)} /> 
        </div>
</div>
</div>
      <FormControlLabel control={<Checkbox name="encoded" checked={encoded} onChange={e =>setEncoded(e.target.value)}/>} label="מוצפן" />
     <div class="save-btn">
      <button  onClick={()=>{saveHandler()}}> שמירה</button>
      </div>
</div>
  );
}
 
export default File;


