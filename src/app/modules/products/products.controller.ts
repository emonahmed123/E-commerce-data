import { Request, Response } from 'express'

import { ProductServices } from './products.service'

const createProducts = async (req: Request, res: Response) => {
  try {
    const  productsData  = req.body
     console.log(productsData)
    const result = await  ProductServices.createProductsIntoDb(productsData)

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (err:any) {
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
