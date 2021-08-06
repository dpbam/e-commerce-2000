// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  as: "cat_name",
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  as: "cat_name",
  foreignKey: "category_id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "tagProduct",
  foreignKey: "tag_id",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "tagBelongProduct",
  foreignKey: "product_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
