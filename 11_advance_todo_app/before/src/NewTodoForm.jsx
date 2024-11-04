import { useContext, useState } from "react"
import { TodosContext } from "./App"

export function NewTodoForm() {
  const [newTodoName, setNewTodoName] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    if (newTodoName === "") return
    addNewTodo(newTodoName)
    setNewTodoName("")
  }

  const { todos, addNewTodo, deleteTodo, toggleTodo } = useContext(TodosContext)

  return (
    <form id="new-todo-form" onSubmit={handleSubmit}>
      <label htmlFor="todo-input">New Todo</label>
      <input
        type="text"
        id="todo-input"
        value={newTodoName}
        onChange={(e) => setNewTodoName(e.target.value)}
      />
      <button onClick={addNewTodo}>Add Todo</button>
    </form>
  )
}
