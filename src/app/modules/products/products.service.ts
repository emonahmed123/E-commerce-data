import { Tproduct } from "./products.interface";
import { productsModel } from "./products.model";

const createProductsIntoDb=async(product:Tproduct)=>{
  
  
  
  const result =await productsModel.create(product)

  return result
}
const getAllProductsIntoDb=async()=>{
  
  
  
  const result =await productsModel.find({})

  return result
}

export const   ProductServices ={
  createProductsIntoDb,
  getAllProductsIntoDb
}