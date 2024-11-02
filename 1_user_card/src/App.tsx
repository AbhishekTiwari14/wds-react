import "./user.css"
import { UserCard } from "./UserCard"
import user from "./user.json"
import { IncrementBy2 } from "./Incrementby2"

function App() {
  return (
    <>
      <UserCard
        name={user.name}
        age={user.age}
        phoneNumber={user.phoneNumber}
        address={user.address}
      />
      <IncrementBy2 />
    </>
  )
}

export default App
