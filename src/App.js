import React, { useState, useEffect } from 'react'
import Button from './components/Button'
import Header from './components/Header'
import Form from './components/Form'

function App() {
  // sabit değişkenler

  //stateler
  const [username, setusername] = useState('')
  const [users, setusers] = useState(null)
  const [count, setcount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'get' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setTimeout(() => {
          setusers(data)
        }, 3000)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {}, [])

  //render
  if (users === null) {
    return <h1>...Loading</h1>
  }
  return (
    <div>
      <Button
        type="primary"
        buttonText="Button1"
        basilinca={() => alert('ben 1. butonum')}
      />
      <Button
        type="primary"
        buttonText="Button2"
        basilinca={() => alert('asdssdffdsf')}
      />
      <Button buttonText="Button3" basilinca={() => alert('sfsdfgdhghjgh')} />
      <Button buttonText="Button4" basilinca={() => alert('safdfgf finito')} />
      <Header username={username} />
      <Form setusername={setusername} />
      {users.map((user) => (
        <div>
          <h1>{user.name}</h1>
          <p>{user.surname}</p>
        </div>
      ))}
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setcount(count + 1)
          }}
        >
          Artır
        </button>
      </div>
    </div>
  )
}

export default App
