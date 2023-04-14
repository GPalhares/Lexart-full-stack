module.exports = function (sequelize, DataTypes) {
  const Products = sequelize.define(
    'Products',
    {
      title: DataTypes.STRING,
      price: DataTypes.FLOAT,
      thumbnail: DataTypes.STRING,
      permalink: DataTypes.STRING,
      searchId: DataTypes.INTEGER,
    },
    {}
  );
  Products.associate = function (models) {
    Products.belongsTo(models.Search, { foreignKey: 'searchId' });
  };
  return Products;
};
