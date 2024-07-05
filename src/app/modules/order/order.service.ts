
import { productsModel } from '../products/products.model'
import { OrderModel } from './order.model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrderIntoDB = async (orderData:any) => {
  const product = await productsModel.findById(orderData.productId)
 console.log(product)
  if (!product) {
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

export const OrderServices = {
  createOrderIntoDB,
  // getAllOrdersFromDB,
  // getOrdersByEmailFromDB,
}
