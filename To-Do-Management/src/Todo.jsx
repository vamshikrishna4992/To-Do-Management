import React from 'react'
// import ModeIcon from '@mui/icons-material/Mode';
export default function TodoList({todos,editHandler,removeHandler,removeAll}) {
  
  return (
    <>
     {todos.map((todo,index)=>
    <div className="todo_cont" key={index}>
      <span>{index+1}</span>
      <h2 className='Todo_Todo'>{todo}</h2>
      <button className='edit' onClick={()=>editHandler(index)}>Edit</button>
      <button className='Todo_btn' onClick={()=>removeHandler(index)}>Remove</button>
      
    </div>
    
    )} 
    <button className='remove_all' onClick={removeAll}>Remove All</button>
    </>
  )
}
