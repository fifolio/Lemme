import { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const Todo: React.FC = () => {

  const [input, setInput] = useState<string>("")

  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: 'Hello TS', completed: false },
    { id: 2, text: 'Bye JS', completed: false }
  ])

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? {...todo, completed: !todo.completed} : todo;
      })
    )
  }

  const handleAdd = () => {
    const newTodo: item = {
      id: Date.now(),
      text: input,
      completed: false
    }

    setTodos([...todos, newTodo]);
  }

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</li>
        ))}
      </ul>
      <input type="text" placeholder="Add todo item" onChange={(e) => setInput(e.currentTarget.value)}/>
      <button type="submit" onClick={handleAdd}>Add</button>
    </div>
  )
}