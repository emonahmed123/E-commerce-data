import { Request, Response } from 'express'

import { ProductServices } from './products.service'
import ProductSchemaValidation from './products.validation'

const createProducts = async (req: Request, res: Response) => {
  try {
    const  products  = req.body

    const zodParseData = ProductSchemaValidation.parse(products)

    const result = await ProductServices.createProductsIntoDb(zodParseData)

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create Product',
      error: error,
    })
  }
}
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm
    if (searchTerm) {
      const result = await ProductServices.searchProductsFromDB(
        searchTerm as string,
      )
      res.status(200).json({
        success: true,
        message: `Searched Products ${searchTerm} retrieved Successfully`,
        data: result,
      })
    } else {
      const result = await ProductServices.getAllProductsIntoDb()

      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error,
    })
  }
}
const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params

    const result = await ProductServices.getSinglesIntoDb(productId)

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error,
    })
  }
}
const updateSingleProducts = async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const { productId } = req.params

    const result = await ProductServices.updateSinglesIntoDb(
      productId,
      productData,
    )

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error,
    })
  }
}

const deleteSingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await ProductServices.deleteSinglesIntoDb(productId)

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error,
    })
  }
}

export const ProductsController = {
  createProducts,
  getAllProducts,
  getSingleProducts,
  updateSingleProducts,
  deleteSingleProducts,
}
