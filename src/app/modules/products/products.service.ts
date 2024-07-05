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
const getSinglesIntoDb=async(id: string)=>{
  
  
  
  const result =await productsModel.findOne({id})

  return result
}
const updateSinglesIntoDb=async( productId: string,
  productData: Tproduct)=>{
  
  
  
  const result =await productsModel.findByIdAndUpdate(productId, productData, {
    new: true,
  });

  return result
};
const deleteSinglesIntoDb=async( productId :string)=>{
  
  
  
  const result =await productsModel.findByIdAndDelete(productId);

  return result  
}

export const   ProductServices ={
  createProductsIntoDb,
  getAllProductsIntoDb,
  getSinglesIntoDb,
  updateSinglesIntoDb,
  deleteSinglesIntoDb
}