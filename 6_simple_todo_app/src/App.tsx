import { useState } from "react"
import "./styles.css"

function App() {
  const [newTodoName, setNewTodoName] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  type Todo = {
    id: string
    name: string
    completed: boolean
  }

  function handleSubmit() {
    if (newTodoName === "") return
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), name: newTodoName, completed: false },
      ]
    })
    setNewTodoName("")
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed }

        return todo
      })
    })
  }

  function deleteTodo(id: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  return (
    <>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>

      <ul id="list">
        {todos?.map((todo: Todo) => {
          return (
            <li key={todo.id} className="list-item">
              <label className="list-item-label">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  data-list-item-checkbox
                />
                <span data-list-item-text>{todo.name}</span>
              </label>
              <button data-button-delete onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
