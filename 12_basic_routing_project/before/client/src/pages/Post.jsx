import axios from "axios"
import { useLoaderData } from "react-router-dom"

function Post() {
  const post = useLoaderData()
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <div>{post.body}</div>
    </>
  )
}

function loader({ request: { signal }, params }) {
  return axios
    .get(`http://127.0.0.1:3000/posts/${params.postId}`, { signal })
    .then((res) => res.data)
}

export const PostRoute = {
  element: <Post />,
  loader,
}
