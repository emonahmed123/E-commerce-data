import { z } from 'zod'

const orderValidation = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
})

export default orderValidation
