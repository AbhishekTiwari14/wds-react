import { createBrowserRouter, Navigate } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { UserListRoute } from "./pages/UserList"
import { TodoListRoute } from "./pages/TodoList"
import { PostListRoute } from "./pages/PostList"
import { PostRoute } from "./pages/Post"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "posts",
        children: [
          { index: true, ...PostListRoute },
          { path: ":postId", ...PostRoute },
        ],
      },
      { path: "users", ...UserListRoute },
      { path: "todos", ...TodoListRoute },
    ],
  },
])
