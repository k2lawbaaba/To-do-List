import React, {useState} from "react";
import Note from "./Note";
import "./styles.css"

function CreateItems() {
const [todo, setTodo]= useState({
    title:'',
    content:''
})
// const [title, setTodoTitle]= useState('')

const [todoArray, setTodoArr]= useState([]);

const getTodo=(e)=>{
    const {name, value}= e.target;
    setTodo(current=>({
        ...current, [name]:value
    }));
}
const deleteItem=(id)=>{
    setTodoArr(prevValues=>{
        return prevValues.filter((item,index)=>{
            return index !== id;
        })
    })
}

const getTodoArray=(e)=>{
    e.preventDefault();
    setTodoArr(prevTodo=> [...prevTodo,todo])
}
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={todo.value} onChange={getTodo}/>
        <textarea name="content" placeholder="Take a note..."value={todo.value} rows="3" onChange={getTodo}/>
        <button onClick={getTodoArray}>Add</button>
      </form>
      {todoArray.map((item, index) =>
        <Note 
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            delete={deleteItem}
        />      
        )}
    </div>
  );
}

export default CreateItems;
