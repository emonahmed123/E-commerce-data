

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
      message: "Failed to create Product",
       error:error
     
    })
  }
}
const getAllProducts = async (req: Request, res: Response) => {
  try {
 
   
  
    const result = await  ProductServices.getAllProductsIntoDb()

    res.status(200).json({
      success: true,
      message: 'Product get successfully!',
      data: result,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    
    res.status(500).json({
       
      success: false,
      message: error.message || 'something went wrong',
       error, 
    })
  }
}
const getSingleProducts = async (req: Request, res: Response) => {
  try {
 
    const { productId } = req.params;
  
    const result = await  ProductServices.getSinglesIntoDb(productId)

    res.status(200).json({
      success: true,
      message: 'Get Product successfully!',
      data: result,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    
    res.status(500).json({
       
      success: false,
      message: error.message || 'something went wrong',
      error , 
    })
  }
}
const updateSingleProducts = async (req: Request, res: Response) => {
  try {
       
    const productData =req.body
    const { productId } = req.params;
  
    const result = await  ProductServices.updateSinglesIntoDb(productId,productData)

    res.status(200).json({
      success: true,
      message: 'Product Update successfully!',
      data: result,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    
    res.status(500).json({
       
      success: false,
      message: error.message || 'something went wrong',
      error , 
    })
  }
}


const deleteSingleProducts = async (req: Request, res: Response) => {
  try {
       
  
    const  {productId}  = req.params;
  
    const result = await  ProductServices.deleteSinglesIntoDb(productId)

    res.status(200).json({
      success: true,
      message: 'Product delete successfully!',
      data: result,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    
    res.status(500).json({
       
      success: false,
      message: error.message || 'something went wrong',
      error , 
    })
  }
}

export const ProductsController = {
  createProducts,
  getAllProducts,
  getSingleProducts,
  updateSingleProducts,
  deleteSingleProducts
}
