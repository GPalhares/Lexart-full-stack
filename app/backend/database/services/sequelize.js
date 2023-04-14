const sequelize = require('./models/sequelizeConfig');
const Search = require('./models/Search');
const Products = require('./models/Products');

Search.hasMany(Products, { foreignKey: 'search_id' });
Products.belongsTo(Search, { foreignKey: 'search_id' });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch((error) => {
    console.error(
      'Ocorreu um erro ao sincronizar os modelos com o banco de dados:',
      error
    );
  });
