import express from 'express'
import { ProductsController } from './products.controller'
const router = express.Router()

router.post('/', ProductsController.createProducts)
router.get('/', ProductsController.getAllProducts)
router.get('/:productId', ProductsController.getSingleProducts)
router.put('/:productId', ProductsController.updateSingleProducts)
router.delete('/:productId', ProductsController.deleteSingleProducts)

export const ProductsRoutes = router
