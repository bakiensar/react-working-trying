import React, { useState } from 'react'

const Form = (props) => {
  const [inputvalue, setinputvalue] = useState('')
  const [surname, setsurname] = useState('')
  const handlesubmit = (event) => {
    event.preventDefault()
    if (inputvalue === '' || surname === '') {
      alert("All fields can't be empty")
      return
    }
    props.setusername(inputvalue + ' ' + surname)
  }
  return (
    <form onSubmit={handlesubmit}>
      <input
        onChange={(event) => {
          setinputvalue(event.target.value)
        }}
        value={inputvalue}
        placeholder="Username"
      />
      <input
        placeholder="Surname"
        value={surname}
        onChange={(event) => {
          setsurname(event.target.value)
        }}
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default Form
