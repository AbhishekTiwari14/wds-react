import { useState } from "react"

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray)

  function push(element) {
    setArray((prevArray) => [...prevArray, element])
  }

  function replace(index, newElement) {
    setArray((prevArray) => [
      ...prevArray.slice(0, index),
      newElement,
      ...prevArray.slice(index + 1),
    ])
  }

  function filter(fxn) {
    setArray((prevArray) => prevArray.filter(fxn))
  }

  function remove(index) {
    setArray((prevArray) => [
      ...prevArray.slice(0, index),
      ...prevArray.slice(index + 1),
    ])
  }

  function clear() {
    setArray([])
  }

  function reset() {
    setArray(initialArray)
  }

  return { array, set: setArray, push, replace, filter, remove, clear, reset }
}

// Create a custom useArray hook that takes an array (or a function that returns an array) as its only argument, stores that array in state, and returns an object with the following properties:
// array - This is the array stored in state
// set - This is just the set state function returned from useState
// push - A function that takes one argument and adds that argument to the end of the array
// replace - A function that takes two arguments (the index of the element to replace, and the new element to replace the old element with) and replaces the element at the specified index with the new element
// filter - A function that takes one argument (a callback function) and filters the array just like the array.filter method
// remove - A function that takes one argument (the index of the element to remove) and removes the element at the index specified
// clear - A function that will remove all elements from the array
// reset - A function that will reset the array to its initial value
