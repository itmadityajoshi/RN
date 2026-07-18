import React from "react";
import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);
  const [editingIndex, seteditingIndex] = useState(null)

  function addTodo() {
    if (task === "") {
      return;
    }
    setTodo([...todos, task]);
    // console.log(task);
    setTask("");
  }

  function remove(index) {
    const newTodos = todos.filter((todos, currentIndex) => {
      return currentIndex !== index;
    });
    setTodo(newTodos);
  }



  function edit(index){
    seteditingIndex(index)
    setTask(todos[index])
  }

  function updateTodo(){
    const updateTodos = todos.map((todos, currentIndex)=>{
      if (editingIndex == currentIndex){
        return task
      }
      return todo;
    })
    setTodo(updateTodos);
    seteditingIndex(null)
    setTask("")
  }

  return (
    <>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <b> </b>
      <button onClick={editingIndex === null ? addTodo : updateTodo}>
        {
          editingIndex === null ? "Add Todo" : "Update Todo"
        }
      </button>

      {todos.map((todo, index) => (
        <>
          <h2 key={index}>{todo} </h2>
          <button onClick={() => remove(index)}>Delete</button> <b>  </b>
          <button onClick={() => edit(index)}>Edit</button>
        </>
      ))}
    </>
  );
};

export default Todo;
