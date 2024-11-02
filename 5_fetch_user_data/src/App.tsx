import { useEffect, useState } from "react"
import { User } from "./User"

function App() {
  type UserData = {
    name: string
    id: number
  }

  const [users, setUsers] = useState<UserData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        users.map((user) => {
          return <User key={user.id} name={user.name} />
        })
      )}
    </>
  )
}

export default App
