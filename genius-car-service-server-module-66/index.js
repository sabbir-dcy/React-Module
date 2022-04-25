const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

// middleware
app.use(cors())
app.use(express.json())

function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).send({ message: 'unauthorized access' })
  }
  const token = authHeader.split(' ')[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'forbidden access' })
    }
    console.log('decoded', decoded)
    req.decoded = decoded
    next()
  })
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8oshb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

async function run() {
  try {
    await client.connect()
    const serviceCollection = client.db('geniusCar').collection('services')
    const orderCollection = client.db('geniusCar').collection('orders')

    //auth related
    app.post('/login', async (req, res) => {
      const user = req.body
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d',
      })
      res.send({ accessToken })
    })

    // service related
    app.get('/service', async (req, res) => {
      const query = {}
      const cursor = serviceCollection.find(query)
      const services = await cursor.toArray()
      res.send(services)
    })

    app.get('/service/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: ObjectId(id) }
      const service = await serviceCollection.findOne(query)
      res.send(service)
    })

    // POST
    app.post('/service', async (req, res) => {
      const newService = req.body
      const result = await serviceCollection.insertOne(newService)
      res.send(result)
    })

    // DELETE
    app.delete('/service/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: ObjectId(id) }
      const result = await serviceCollection.deleteOne(query)
      res.send(result)
    })

    // order collection api
    app.post('/orders', async (req, res) => {
      const order = req.body
      const result = await orderCollection.insertOne(order)
      res.send(result)
    })

    // get order
    app.get('/orders', verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email
      const queryEmail = req.query.email
      if (queryEmail === decodedEmail) {
        const cursor = orderCollection.find({ email: queryEmail })
        const orders = await cursor.toArray()
        res.send(orders)
      } else {
        res.status(403).send({ message: 'forbidden access' })
      }
    })
  } finally {
  }
}

run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Running Genius Server')
})

app.listen(port, () => {
  console.log('Listening to port', port)
})
