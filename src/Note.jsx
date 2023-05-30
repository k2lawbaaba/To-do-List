import React from "react";

const Note=(prop)=>{
    return<div className="note" id={prop.id}>
        <h1>{prop.title}</h1>
        <p>{prop.content}</p>
        <button onClick={()=>{
           prop.delete(prop.id) 
        }}>
        Delete</button>

    </div>
}
export default Note;