// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  // as: "category_product",
  foreignKey: "category_id",
  // onDelete: "SET NULL",
});

// Categories have many Products
Category.hasMany(Product, {
  // as: "category_product",
  foreignKey: "category_id",
  // onDelete: "SET NULL",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: "product_tag",
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: "tag_product",
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
