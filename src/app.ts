import express from 'express'

import cors from 'cors'

import { ProductsRoutes } from './app/modules/products/products.route'
const app = express()

app.use(cors())

//routes

app.use('/api/products', ProductsRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
