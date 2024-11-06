import axios from "axios"
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom"

function UserList() {
  const users = useLoaderData()

  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => {
          return (
            <div key={user.id} className="card">
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                    <div>{user.company.name}</div>
                    <div>{user.website}</div>
                    <div>{user.email}</div>
                </div>
                <div className="card-footer">
                    <Link className="btn" to={":user"}>View</Link>
                </div>
            </div>
          )
        })}
      </div>
      <ScrollRestoration />
    </>
  )
}

function loader({ request: { signal } }) {
  return axios
    .get("http://127.0.0.1:3000/users", { signal })
    .then((res) => res.data)
}

export const UserListRoute = {
  element: <UserList />,
  loader,
}
