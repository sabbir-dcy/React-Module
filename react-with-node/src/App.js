import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  const handleAddUser = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const user = { name, email } // name:name, email:email

    //*post data to server
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setUsers([...users, data]))
  }
  return (
    <div className='App'>
      <h2>{users.length}</h2>
      <form onSubmit={handleAddUser}>
        <input type='text' name='name' placeholder='name' required />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='email'
          required
        />
        <input type='submit' value='add user' />
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
