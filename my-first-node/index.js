const { response } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

const users = [
  { id: 1, name: 'sabbir', email: 'sabbir@gmail.com', phone: '0178823423' },
  { id: 2, name: 'jacky', email: 'jacky@gmail.com', phone: '0178888238' },
  { id: 3, name: 'ruby', email: 'ruby@gmail.com', phone: '0178887682' },
  { id: 4, name: 'pearson', email: 'pearson@gmail.com', phone: '0178888107' },
  { id: 5, name: 'john', email: 'john@gmail.com', phone: '0178885720' },
]

app.get('/users', (req, response) => {
  // filter by search query parameter
  if (req.query) {
    const search = req.query.name.toLowerCase()
    const match = users.filter((user) =>
    user.name.toLowerCase().includes(search)
    )
    response.send(match)
  } else {
    response.send(users)
  }
})

app.get('/user/:id', (req, res) => {
  console.log(req.params)
  const id = parseInt(req.params.id)
  const user = users.find((u) => u.id === id)
  res.send(user)
})

app.listen(port, () => {
  console.log('listening to port', port)
})

app.post('/user', (req, res) => {
  console.log('request', req.body)
  const user = req.body
  user.id = users.length + 1
  users.push(user)
  res.send(user)
})
