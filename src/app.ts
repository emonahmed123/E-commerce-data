import express from 'express'

import cors from 'cors'

import { ProductsRoutes } from './app/modules/products/products.route'
import { OrderRoutes } from './app/modules/order/order.routes'
const app = express()

app.use(cors())
app.use(express.json())
//routes

app.use('/api/products', ProductsRoutes)
app.use('/api/orders', OrderRoutes)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})
app.get('/', (req, res) => {
  res.send('Every thing ok ')
})

export default app
