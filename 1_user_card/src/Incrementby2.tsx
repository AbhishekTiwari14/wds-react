import { useState } from "react"

export function IncrementBy2() {
  const [age, setAge] = useState(0)

  function increaseBy2() {
    console.log(age, "s")  //0  1
    setAge(age + 1)
    console.log(age, "m")  //0  1
    setAge(age + 1)        //1  2
    console.log(age, "e") //1   1  //bcoz console happens immediately but state update asyncly

    //SOLUTIONS BELOW

    // console.log(age, "s") //0  2
    // setAge((prevAge) => prevAge + 1)
    // console.log(age, "m") //0  2
    // setAge((prevAge) => prevAge + 1) // 2
    // console.log(age, "e") //0  2

    //works same as above
    // console.log(age, "s") //0  2
    // setAge(age + 1)
    // console.log(age, "m") //0  2
    // setAge((prevAge) => prevAge + 1) // 2
    // console.log(age, "e") //0  2

  }

  return (
    <>
      <button onClick={increaseBy2}>Click</button>
      <h1>{age}</h1>
    </>
  )
}
