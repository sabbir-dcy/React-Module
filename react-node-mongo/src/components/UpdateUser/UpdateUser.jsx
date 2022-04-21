import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
  const { id } = useParams()
  console.log(id)
  const [user, setUser] = useState([])
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value

    const udatedUser = { name, email }

    // send data to the server

    fetch(`http://localhost:5000/user/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(udatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        alert('user updated')
        e.target.reset()
      })
  }
  return (
    <div>
      <h2>updating user: {user.name}</h2>
      <form onSubmit={handleSubmit}>
        <input type='name' name='name' id='name' required />
        <br />
        <input type='email' name='email' id='email' required />
        <br />
        <input type='submit' value='update' />
      </form>
    </div>
  )
}

export default UpdateUser
