import {
  createBrowserRouter,
  Navigate,
  useRouteError,
  redirect,
} from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { postRoute } from "./pages/Post"
import { postListRoute } from "./pages/PostList"
import { todoListRoute } from "./pages/TodoList"
import { userRoute } from "./pages/User"
import { userListRoute } from "./pages/UserList"
import { NewPost } from "./pages/NewPost"
import axios from "axios"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...postListRoute,
              },
              { path: ":postId", ...postRoute },
              {
                path: "new",
                element: <NewPost />,
                loader: ({ request: { signal } }) => {
                  return axios
                    .get("http://127.0.0.1:3000/users", { signal })
                    .then((res) => res.data)
                },
                action: async ({ request }) => {
                  const formData = await request.formData()
                  const title = formData.get("title")
                  const body = formData.get("body")
                  const userId = formData.get("userId")

                  const newPost = await fetch("http://127.0.0.1:3000/posts", {
                    method: "POST",
                    signal: request.signal,
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      title,
                      body,
                      userId,
                    }),
                  }).then((res) => res.json())

                  return redirect("/")
                },
              },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...userListRoute },
              { path: ":userId", ...userRoute },
            ],
          },
          { path: "todos", ...todoListRoute },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
])

function ErrorPage() {
  const error = useRouteError()

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  )
}
