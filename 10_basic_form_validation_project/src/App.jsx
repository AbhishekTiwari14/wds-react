import { useRef, useState } from "react"
import "./styles.css"

function App() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [emailError, setEmailError] = useState(undefined)
  const [passwordError, setPasswordError] = useState(undefined)

  function handleSubmit(e) {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    if (email === "") setEmailError("Required (Cannot be blank)")
    else if (!email.endsWith("@webdevsimplified.com"))
      setEmailError("Must end in @webdevsimplified.com")
    else setEmailError("")

    if (password === "") setPasswordError("Required (Cannot be blank)")
    else if (password.length < 10)
      setPasswordError("Must Be 10 characters or longer")
    else if (!/[a-z]/.test(password))
      setPasswordError("Must include a lowercase letter")
    else if (!/[A-Z]/.test(password))
      setPasswordError("Must include an uppercase letter")
    else if (!/[0-9]/.test(password)) setPasswordError("Must include a number")
    else setPasswordError("")
  }

  return (
    <>
      <form className="form" onClick={(e) => handleSubmit(e)}>
        <div className={`form-group ${emailError? "error": ''}`}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            className="input"
            type="email"
            id="email"
            //value="test@test.com"
          />
          {emailError && <div className="msg">{emailError}</div>}
        </div>
        <div className={`form-group ${emailError? "error": ''}`}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            ref={passwordRef}
            className="input"
            //value="Password123!"
            type="password"
            id="password"
          />
          {passwordError && <div className="msg">{passwordError}</div>}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default App
