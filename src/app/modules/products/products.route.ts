import express from 'express'
import { ProductsController } from './products.controller'
const router = express.Router()

router.post('/products-create',ProductsController.createProducts)

export const ProductsRoutes = router
