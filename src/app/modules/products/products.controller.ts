

import { Request, Response } from 'express'

import { ProductServices } from './products.service'
import ProductSchemaValidation from './products.validation'

const createProducts = async (req: Request, res: Response) => {
  try {
    const {products: productsData } = req.body
   
    const zodParseData =ProductSchemaValidation.parse(productsData)

    const result = await  ProductServices.createProductsIntoDb(zodParseData)

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    
    res.status(500).json({
       
      success: false,
      message: error.message || 'something went wrong',
      data:  error , 
    })
  }
}
const getAllProducts = async (req: Request, res: Response) => {
  try {
 
   
  
    const result = await  ProductServices.getAllProductsIntoDb()

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    
    res.status(500).json({
       
      success: false,
      message: error.message || 'something went wrong',
      data:  error , 
    })
  }
}

export const ProductsController = {
  createProducts,
  getAllProducts
}
