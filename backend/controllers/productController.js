const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");

//Create product -- admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

//Get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
};

//Get one product detail
exports.getProductDetail = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }


  res.status(200).json({
    success: true,
    product
  }); 
};

// Delete Product

exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
   
  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }
    await product.deleteOne();
  
    res.status(200).json({
      success: true,
      message: "Product Delete Successfully",
    });
  };

//Update product -- admin
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  
  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  } 
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product
  });
};


