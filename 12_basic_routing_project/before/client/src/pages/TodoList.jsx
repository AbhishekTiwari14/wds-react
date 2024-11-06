import axios from "axios"
import { useLoaderData } from "react-router-dom"

function TodoList() {
  const todos = useLoaderData()
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "strike-through" : ""}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  )
}

function loader({ request: { signal } }) {
  return axios
    .get("http://127.0.0.1:3000/todos", { signal })
    .then((res) => res.data)
}

export const TodoListRoute = {
  element: <TodoList />,
  loader,
}
