import React from 'react'

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value

    const user = { name, email }

    // send data to the server

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        alert('user added')
        e.target.reset()
      })
  }

  return (
    <div style={{ background: '#262626', height: '100vh' }}>
      <h2>please add a new user</h2>
      <form onSubmit={handleSubmit}>
        <input type='name' name='name' id='name' required />
        <br />
        <input type='email' name='email' id='email' required />
        <br />
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default AddUser
