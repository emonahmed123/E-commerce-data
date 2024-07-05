import express from 'express'
import { ProductsController } from './products.controller'
const router = express.Router()

router.post('/products-create',ProductsController.createProducts)
router.get('/',ProductsController.getAllProducts)

export const ProductsRoutes = router
