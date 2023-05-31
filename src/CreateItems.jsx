import React, {useState} from "react";
import Note from "./Note";
import "./styles.css"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function CreateItems() {
const [todo, setTodo]= useState({
    title:'',
    content:''
})
const [todoArray, setTodoArr]= useState([]);
const [isClicked, setClick]= useState(false);

const getTodo=(e)=>{
    const {name, value}= e.target;
    setTodo(current=>({
        ...current, [name]:value
    }));
}

const clicked=(e)=>{
    e.preventDefault();
    setClick(true)
}

const deleteItem=(id)=>{
    setTodoArr(prevValues=>{
        return prevValues.filter((item,index)=>{
            return index !== id;
        })
    })
}

 const theme = createTheme({
    components: {
      // Name of the component
      MuiFab: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            position: 'absolute',
            right: '14px',
            bottom: '-2px',
            float: 'right',
            background: 'rgb(39, 39, 136)',
            color: '#fff',
            border: 'none',
            borderradius: '50%',
            width: '36px',
            height: '36px',
            boxshadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
            outline: 'none',   
            
          },
        },
      },
    },
  });
  

const getTodoArray=(e)=>{
    e.preventDefault();
   setTodoArr(prevTodo=> [...prevTodo,todo]) 
   setTodo({
    title:'',
    content:''})   
    setClick(false)
}
  
  return (
    <div>
      <form onClick={clicked}>
      {(!isClicked)?  null:  <input name="title" placeholder="Title" value={todo.title} onChange={getTodo}/>}
        <textarea name="content" placeholder="Take a note..." value={todo.content} rows={!isClicked? '1':'3'} onChange={getTodo}/>
        <ThemeProvider theme={theme}>
        <Zoom in={isClicked}>
        <Fab onClick={getTodoArray}><AddIcon /></Fab>
        </Zoom>
         </ThemeProvider>
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
