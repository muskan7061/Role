const { Categories } = require("./multipleRole/categories.models");
const { Product } = require("./multipleRole/product.model");
const { subCategories } = require("./multipleRole/subCategories");



Product.hasMany(Categories, {
  foreignKey: "productID",
  as: "categories",
});

Categories.belongsTo(Product, {
  foreignKey: "productID",
  as: "products",
});

Categories.hasMany(subCategories, {
    foreignKey: "categoryID",
    as: "subCategories"
})

subCategories.hasMany(Categories, {
    foreignKey: "categoryID",
    as: "Categories"
})