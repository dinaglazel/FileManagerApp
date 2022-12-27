import React, { useState ,useEffect} from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { BsFillPencilFill, BsFillCaretDownFill, BsFillFileXFill } from "react-icons/bs";

import File from './file'
import FileView from './fileView'

import { ClickAwayListener } from "@mui/base";

function App() {
  const [filesList, setfilesList] = useState([
  ]);
  useEffect(() => { 
  async function fetchFiless() {
    try {
        const URL = 'http://localhost:54991/api/files';
          const res = await axios.get(URL);
          console.log(res.data);
          setfilesList(res.data);
       
     }
     catch (error) {
       console.log(error);
       setfilesList([{"id":1,"name":"תמונה ילדים","type":4,"size":350,"dateCreated":"2022-12-12T09:59:31.0556828+02:00","encoded":false,"author":"חיים לוי"},{"id":2,"name":"מכתב ברכה","type":1,"size":16,"dateCreated":"2022-10-28T09:59:31.0645228+03:00","encoded":false,"author":"אהרון כהן"},{"id":3,"name":"סיכום פרטים","type":0,"size":100,"dateCreated":"2022-12-20T09:59:31.0645305+02:00","encoded":false,"author":"חיים לוי"},{"id":4,"name":"מצגת ארוכה","type":3,"size":190500,"dateCreated":"2022-12-07T09:59:31.0645312+02:00","encoded":false,"author":"דוד שמעון"}])
       }
     } fetchFiless(); }, [])
    
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...filesList];
    list[index][`${name}_temp`] = value;
    setfilesList(list);
  }

  const handleCheckedChange = (e, index) => {
    const { name, checked } = e.target;
    const list = [...filesList];
    list[index][`${name}`] = checked;
    setfilesList(list);
  }

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...filesList];
    list.splice(index, 1);
    setfilesList(list);
  }; 

  // handle click event of the Add button
  const handleAddClick = () => {
    const list = [...filesList];
list.push({
  name:"",type:"",author:"",encoded:false,edit:true,
id:null, index:list.length
})
    setfilesList(list);
  };
  const clickEditHandler = (e,i) => {
    const list = [...filesList];
   list[i].edit=! list[i].edit;
    setfilesList(list);
  };
  const clickViewHandler = (e,i) => {
    const list = [...filesList];
   list[i].view= !list[i].view;
    setfilesList(list);
  };
  const saveFile = (file) => {
    const list = [...filesList];
if(file.id)   { list[file.index]=file;}
 else{ 
    list.push(file)}
    setfilesList(list);
    try {
      const URL = 'http://localhost:54991/api/files';
         axios.post(URL,file);
     
   }
   catch (error) {
     console.log(error);
  }
};
  return (
    <div className="App">
   
      {filesList.map((file, i) => {
        return (
          <div>
           <div className="box">
             <span>{file.name}
             </span>
             <div class="icons"> 
             <BsFillPencilFill  onClick={(e)=>clickEditHandler(e,i)}></BsFillPencilFill>
             <BsFillCaretDownFill  onClick={(e)=>clickViewHandler(e,i)}></BsFillCaretDownFill>
             <BsFillFileXFill   onClick={() => handleRemoveClick(i)}></BsFillFileXFill>
             </div>
{file.edit &&
<File 
 file={file} index={i} saveFile={saveFile}></File>}
 {file.view &&
<FileView
 file={file} ></FileView>
      }
   </div> </div> );     
     })}
     <div class="add-btn">
     <button onClick={handleAddClick}>הוספה</button>
     </div>
    </div>
  );
}   

 
export default App;
