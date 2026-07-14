import React from 'react'

const Todo = () => {

    const todos = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
    priority: "High",
  },
  {
    id: 2,
    title: "Finish React assignment",
    completed: true,
    priority: "High",
  },
  {
    id: 3,
    title: "Go for a morning walk",
    completed: false,
    priority: "Medium",
  },
  {
    id: 4,
    title: "Read 20 pages of a book",
    completed: false,
    priority: "Low",
  },
  {
    id: 5,
    title: "Clean the workspace",
    completed: true,
    priority: "Medium",
  },
  {
    id: 6,
    title: "Call the electrician",
    completed: false,
    priority: "High",
  },
  {
    id: 7,
    title: "Pay electricity bill",
    completed: true,
    priority: "High",
  },
  {
    id: 8,
    title: "Practice JavaScript",
    completed: false,
    priority: "Medium",
  },
  {
    id: 9,
    title: "Schedule dentist appointment",
    completed: false,
    priority: "Low",
  },
  {
    id: 10,
    title: "Water the plants",
    completed: true,
    priority: "Low",
  },
];


  return (
    <div>

        {
            todos.map((todo)=>(
                <h2 key={todo.id}>
                    {todo.title}
                </h2>
            ))
        }


    </div>
  )
}

export default Todo