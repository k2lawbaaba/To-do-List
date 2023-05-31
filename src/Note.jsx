import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const Note=(prop)=>{
    
    return<div className="note" id={prop.id}>
        <h1>{prop.title}</h1>
        <p>{prop.content}</p>
       
        <Zoom in={true} >
        <Fab onClick={()=>{
           prop.delete(prop.id) 
        }} ><DeleteIcon /></Fab>
        </Zoom>
    
    </div>
}
export default Note;