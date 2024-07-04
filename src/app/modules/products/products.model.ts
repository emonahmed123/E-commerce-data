import mongoose, { Schema } from "mongoose";
import { Tinventory, Tproduct, Tvariant } from "./products.interface";

const VariantSchema = new Schema<Tvariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventorySchema= new Schema<Tinventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});








const productsSchema = new Schema<Tproduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: VariantSchema, required: true },
  inventory: { type: InventorySchema, required: true },
});


export const productsModel=mongoose.model('products', productsSchema)