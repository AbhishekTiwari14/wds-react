import { useState } from "react"

import "./App.css"

function App() {
  const [array, setArray] = useState(["A", "B", "C", "B"])
  const [value, setValue] = useState("")

  function removeFirstLetter() {
    setArray((prevArray) => prevArray.slice(1))
  }

  function removeAllBs() {
    setArray((prevArray) => prevArray.filter((element) => element !== "B"))
  }

  function addLetterAtStart(letter: string) {
    setArray((prevArray) => [letter, ...prevArray])
  }

  function addLetterAtEnd(letter: string) {
    setArray((prevArray) => [...prevArray, letter])
  }

  function clearArray() {
    setArray([])
  }

  function changeBstoHs() {
    setArray((prevArray) =>
      prevArray.map((letter) => (letter === "B" ? "H" : letter))
    )
  }

  function addInputLetterToArray() {
    if (value === "") return
    setArray((prevArray) => [...prevArray, value])
  }

  function addLetterAtGivenIndex(letter: string, index: number) {
    setArray((prevArray) => {
      return [...prevArray.slice(0, index), letter, ...prevArray.slice(index)]
    })
  }

  return (
    <>
      <div>Array: {array.join(",")}</div>
      <button onClick={removeFirstLetter}>Remove first element</button>
      <button onClick={removeAllBs}>Remove All Bs</button>
      <button onClick={() => addLetterAtStart("P")}>Add Letter at start</button>
      <button onClick={() => addLetterAtEnd("E")}>Add Letter at end</button>
      <button onClick={() => clearArray()}>Clear Array</button>
      <button onClick={changeBstoHs}>Change Bs to Hs</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addInputLetterToArray}>Add Input Letter</button>
      <button onClick={() => addLetterAtGivenIndex("X", 2)}>
        Add X Letter at 2nd index
      </button>
    </>
  )
}

export default App
