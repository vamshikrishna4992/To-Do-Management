import React, { useState } from 'react'
import './App.css'
import Todo from './Todo';

export default function App() {

  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);
  const [isEdit,setEdit] = useState(false);
  const [isIndex,setIsIndex] = useState(null);

  const changeHandler = (e)=>{
    setTask(e.target.value)
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    if(task == ''){
      alert('Please Add The Task')
    }else{
      if(isEdit){
        const updatedTodos = todos.map((todo,index)=>{
          if(isIndex === index){
            return task;
          }else{
            return todo;
          }
        })
        setTodos(updatedTodos);
        setEdit(false);
        setIsIndex(null);
      }else{
        setTodos([...todos,task])
      }
    }
    setTask('')
  }
  const editHandler = ((index)=>{
    setEdit(true);
    setIsIndex(index);
    setTask(todos[index]);
  })

  const removeHandler = ((i)=>{
    const updatedTodo = todos.filter((todo,index)=> index !== i);
    setTodos(updatedTodo);
  })

  const removeAll = ()=>{
    setTodos([])
  }

  return (
    <>
      <div className="container">
        <h1>ToDo Management</h1>
        <div className="cont">
          <form onSubmit={submitHandler}>
            <input type="text" value={task} className='task' onChange={changeHandler} placeholder='Add Your Task....' />
            <input type="submit" value={isEdit ? "Update" : "Add"} className='add' />
          </form>
          <Todo todos={todos} editHandler = {editHandler} removeHandler = {removeHandler} removeAll = {removeAll}/>
        </div>
      </div>
    </>
  )
}
