import { Request, Response } from 'express'
import { OrderServices } from './order.service'
import orderValidation from './ordervalidation'

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body
 
    const zodParseData = orderValidation.parse(orderData)

    const result = await OrderServices.createOrderIntoDB(zodParseData)
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create Order!',
      error: error,
    })
  }
}

export const OrderControllers = {
  createOrder,
}
