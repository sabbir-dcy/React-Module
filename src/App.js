import { useEffect, useState } from 'react'
import './App.css'



function App() {
  return (
    <div className="App">
      <District name="dhaka"></District>
      <District name="khulna"></District>
      <District name="rajshahi"></District>
      <District name="kumilla"></District>
      <LoadPosts>

      </LoadPosts>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'plum',
  margin: '1rem',
  padding: '1rem',
  borderRadius: '.6rem'
}

function LoadPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => { setPosts(data) })
  }, [])
  return (
    <div className="post-container">
      <h1>post : {posts.length}</h1>
      {
        posts.map((post) =>
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
          ></Post>)
      }
    </div>
  )
}

function Post({ title, body }) {
  const style = {
    backgroundColor : 'lightblue',
    margin : '1rem',
    padding : '1rem 4rem',
  }
  return (
    <div className="post" style={style}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

function District({ name }) {
  const districtStyle = {
    backgroundColor: 'plum',
    margin: '1rem',
    padding: '1rem',
    borderRadius: '.6rem'
  }

  const buttonStyle = {
    fontSize: '1rem',
    padding: '1rem 1.5rem',
    border: 'none',
    backgroundColor: 'lightcoral',
    color: 'white'
  }
  
  const [power, setPower] = useState(0)
  return (
    <div className="district" style={districtStyle}>
      <h1>{name}</h1>
      <h3>power : {power}</h3>
      <button style={buttonStyle} onClick={() => { setPower(power + 1) }}>boost me</button>
    </div>
  )
}

export default App
