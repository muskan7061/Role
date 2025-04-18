const { Categories } = require("../../models/multipleRole/categories.models");


const createCategories = async (req, res) => {
  try {
    const { name, details , productID} = req.body;
    if ([name, details, productID].some((data) => data.trim() === "")) {
      return res.status(409).json({
        status: 409,
        messgae: "All fileds are required",
      });
    }
    const existCategories = await Categories.findOne({ where: { name } });
    if (existCategories) {
      return res.status(409).json({
        status: 409,
        message: "Categories already exists with this name",
      });
    }
    const categoryCreate = await Categories.create({
      name,
      details,
      productID
    });
    return res.status(201).json({
      message: "Categories created successfully",
      data: categoryCreate,
    });
  } catch (error) {
    console.log("Error in createCategories Api:", error);
    return res.status(500).json({
      message: "Internal server Error",
      error: error.message,
    });
  }
};

module.exports = { createCategories };
