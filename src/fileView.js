import React, { useState } from "react";


function FileView (props) {
  return (
    <div>
 <div>
  שם קובץ: {props.file.name}  
</div>   
          <div>
           מוצפן: {props.file.encoded?"כן":"לא"}
          </div>
           <div>
           מחבר :{props.file.author}  
         </div> 
         <div>
           גודל :KB{props.file.size}  
         </div> 
         </div>
  );
}
 
export default FileView;


