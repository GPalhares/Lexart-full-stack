module.exports = function (sequelize, DataTypes) {
  const Search = sequelize.define(
    'Search',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Search.associate = function (models) {
    Search.hasMany(models.Products, { foreignKey: 'searchId' });
  };
  return Search;
};
