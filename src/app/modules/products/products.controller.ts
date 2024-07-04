import { Request, Response } from 'express'
import { productsModel } from './products.model'
import { Tproduct } from './products.interface'

const createProducts = async (req: Request<Tproduct>, res: Response) => {
  try {
    const { products: productsData } = req.body

    const result = await productsModel.create(productsData)

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      data: err,
    })
  }
}

export const ProductsController = {
  createProducts,
}
