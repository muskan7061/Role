const { Product } = require("../../models/multipleRole/product.model");

const createProduct = async (req, res) => {
  try {
    const { name, details, digital } = req.body;
    if ([name, details, digital].some((data) => data.trim() === "")) {
      return res.status(409).json({
        status: 409,
        messgae: "All fileds are required",
      });
    }
    const existProduct = await Product.findOne({ where: { name } });
    if (existProduct) {
      return res.status(409).json({
        status: 409,
        message: "Product already exists with this name",
      });
    }
    const productCreate = await Product.create({
      name,
      details,
      digital,
    });
    return res.status(201).json({
      message: "Product created successfully",
      data: productCreate,
    });
  } catch (error) {
    console.log("Error in createProduct Api:", error);
    return res.status(500).json({
      message: "Internal server Error",
      error: error.message,
    });
  }
};

module.exports = { createProduct };
