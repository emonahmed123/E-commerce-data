import { z } from 'zod'

const VariantSchema = z.object({
  type: z.string(),
  value: z.string(),
})

const InventorySchema = z.object({
  quantity: z.number().int().nonnegative(),
  inStock: z.boolean(),
})

const ProductSchemaValidation = z.object({
  name: z.string().min(3),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
})

export default ProductSchemaValidation
