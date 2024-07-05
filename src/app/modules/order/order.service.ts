import { productsModel } from '../products/products.model'
import { OrderModel } from './order.model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrderIntoDB = async (orderData: any) => {
  const product = await productsModel.findById(orderData.productId)

  if (product === null) {
    throw new Error('Product is not available in inventory')
  }

  if (product.inventory.quantity < orderData.quantity) {
    throw new Error('Insufficient quantity available in inventory')
  }

  const order = new OrderModel(orderData)
  await order.save()

  product.inventory.quantity -= orderData.quantity
  product.inventory.inStock = product.inventory.quantity > 0
  await product.save()

  return order
}

const getAllOrdersFromDB = async () => {
  return await OrderModel.find()
}

const getOrdersByEmailFromDB = async (email: string) => {
  const EmailExist = await OrderModel.findOne({ email: email })

  if (!EmailExist) {
    throw new Error('Order not found')
  } else {
    return await OrderModel.find({ email })
  }
}
export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getOrdersByEmailFromDB,
}
