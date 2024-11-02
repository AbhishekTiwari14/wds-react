import { useEffect, useState } from "react"

export function useLocalStorage(key, initialVal) {
  const [value, setValue] = useState(() => {
    const localVal = localStorage.getItem(key)
    if (localVal === null) {
      if (typeof initialVal === "function") {
        return initialVal()
      } else return initialVal
    } else return JSON.parse(localVal)
  })

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [value, key])

  return [value, setValue]
}

/* 
Create a custom useLocalStorage hook that functions identically to useState by returning an array where the first element is the value and the second element is the function to set the value. This hook should take two arguments. The first is a string which is the key for localStorage and the second is the initial value of the state.
Whenever the state changes it should be synced with localStorage so that if you were to refresh your page nothing would change as all values are pulled from localStorage on initial load and stored in localStorage when changed.
Bonus
Ensure that the useLocalStorage hook works just like useState in that you can pass it a value or function as the initial value.
Use JSON to serialize and deserialize the values stored in localStorage so that it will work with any value (such as arrays or objects).
*/
