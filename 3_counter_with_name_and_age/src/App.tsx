import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={() => setAge((prevAge) => prevAge - 1)}> - </button>
      <span>{age}</span>
      <button onClick={() => setAge((prevAge) => prevAge + 1)}> + </button>
      <div>
        Hi, I'm {name} and my age is {age}
      </div>
    </>
  )
}

export default App

// Create a new function component that has state for name and age
// Create a text input that when updated will update the name state
// Create a plus and minus button that will update the age state and display the state between the two buttons
// Display the string My name is {name} and I am {age} years old in your JSX
// Repeat but for a class component instead of a function component
