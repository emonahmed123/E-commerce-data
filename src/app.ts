import express from 'express'

import cors from 'cors'

import { ProductsRoutes } from './app/modules/products/products.route'
const app = express()

app.use(cors())
app.use(express.json());
//routes

app.use('/api/products',ProductsRoutes)

app.get('/', (req, res) => {
  res.send('Every thing ok ')
})

export default app
