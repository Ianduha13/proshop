import express from "express";
const router = express.Router()
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
//@desc Fetch all products
//@route GET/API/PRODUCT
//@access Public
router.get('/', asyncHandler(async (req, res)=>  {
  const products = await Product.find({})
  res.json(products)
}))
//@desc Fetch single products
//@route GET/API/PRODUCT/:id
//@access Public
router.get('/:id', asyncHandler(async (req, res)=>  {
  const product = await Product.findById(req.params.id)
  if(product){
  res.json(product)
  } else {
    res.status(404)
    throw new Error ('Product not found')
  }
}))
export default router