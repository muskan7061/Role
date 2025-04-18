const { subCategories } = require("../../models/multipleRole/subCategories");


const createSubCategories = async (req, res) => {
  try {
    const { name, details , categoryID} = req.body;
    if ([name, details, categoryID].some((data) => data.trim() === "")) {
      return res.status(409).json({
        status: 409,
        messgae: "All fileds are required",
      });
    }
    const existSubCategories = await subCategories.findOne({ where: { name } });
    if (existSubCategories) {
      return res.status(409).json({
        status: 409,
        message: "Categories already exists with this name",
      });
    }
    const subCategoryCreate = await subCategories.create({
      name,
      details,
      productID
    });
    return res.status(201).json({
      message: "Categories created successfully",
      data: subCategoryCreate,
    });
  } catch (error) {
    console.log("Error in createSubCategories Api:", error);
    return res.status(500).json({
      message: "Internal server Error",
      error: error.message,
    });
  }
};

module.exports = { createSubCategories };
