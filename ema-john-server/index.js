import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongodb from 'mongodb'

const port = process.env.PORT || 5000
const app = express()

dotenv.config()

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('server is running')
})

app.listen(port, () => {
  console.log('running on port', port)
})

const { MongoClient, ServerApiVersion, ObjectId } = mongodb

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.8oshb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

const run = async () => {
  try {
    await client.connect()
    const productCollection = client
      .db('EmaJohnProducts')
      .collection('products')

    app.get('/api/products', async (req, res) => {
      console.log('query', req.query)
      const page = parseInt(req.query.page)
      const size = parseInt(req.query.size)

      const query = {}
      const cursor = productCollection.find(query)
      let products
      if (page || size) {
        // page : 0 --> skip: 0 , get: 0-10(10)
        // page : 1 --> skip: 1*10 , get: 11-20(10)
        // page : 2 --> skip: 2*10 , get: 21-30(10)
        products = await cursor
          .skip(page * size)
          .limit(size)
          .toArray()
      } else {
        products = await cursor.toArray()
      }
      res.send(products)
    })

    app.get('/api/products/count', async (req, res) => {
      /** 
       * * here count() is deprecated
       * * we use estimatedDocumentCount() on collection
       const query = {} //? no need thi line
      const cursor = productCollection.find(query) //?no need this line
      const count = await cursor.count()
      */

      const count = await productCollection.estimatedDocumentCount()
      res.send({ count })
      // or use
      // res.json(count)
    })
    //* use post to get products by id
    app.post('/api/productByKeys', async (req, res) => {
      const keys = req.body
      const ids = keys.map((id) => ObjectId(id))
      const query = { _id: { $in: ids } }
      const cursor = productCollection.find(query)
      const products = await cursor.toArray()
      console.log(keys)
      res.send(products)
    })
  } finally {
  }
}

run().catch(console.dir)
