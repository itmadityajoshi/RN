import React from "react";
import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);

  function addTodo() {
    if (task === "") {
      return;
    }
    setTodo([...todos, task]);
    console.log(task);
    setTask("");
  }

  function remove(index) {
    const newTodos = todos.filter((todos, currentIndex) => {
      return currentIndex !== index;
    });
    setTodo(newTodos);
  }

  return (
    <>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <b> </b>
      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo, index) => (
        <>
          <h2 key={index}>{todo} </h2>{" "}
          <button onClick={() => remove(index)}>remove Todo</button>
        </>
      ))}
    </>
  );
};

export default Todo;
