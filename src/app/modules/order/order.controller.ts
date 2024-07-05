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
      message: 'Order created successfully!',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email
    if (email) {
      const result = await OrderServices.getOrdersByEmailFromDB(email as string)
      res.status(200).json({
        success: true,
        message: 'order feacth successfully!',
        data: result,
      })
    } else {
      const result = await OrderServices.getAllOrdersFromDB()
      res.status(200).json({
        success: true,
        message: 'Order featch successfully!',
        data: result,
      })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    })
  }
}

export const OrderControllers = {
  createOrder,
  getAllOrders,
}
