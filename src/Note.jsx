import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import './styles.css';

const Note=(prop)=>{
    return<div className="note" id={prop.id}>
        <h1>{prop.title}</h1>
        <p>{prop.content}</p>
        <button onClick={()=>{
           prop.delete(prop.id) 
        }}>
        <DeleteIcon /></button>

    </div>
}
export default Note;