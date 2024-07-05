import { Schema, model } from 'mongoose'
import { Tinventory, Tproduct, Tvariant } from './products.interface'

const VariantSchema = new Schema<Tvariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
})

const InventorySchema = new Schema<Tinventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
})

const productsSchema = new Schema<Tproduct>({
  name: { type: String, required: [true, 'name is required'] },
  description: {
    type: String,
    required: [true, 'description is required'],
    minlength: [10, 'description must haveW'],
  },
  price: { type: Number, required: [true, 'price required'] },
  category: { type: String, required: true },
  tags: { type: [String], required: [true, 'tags is required'] },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: [true, 'inventory required'] },
})

export const productsModel = model<Tproduct>('products', productsSchema)
