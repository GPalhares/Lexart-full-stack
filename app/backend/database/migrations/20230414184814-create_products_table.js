module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING(8, 2),
        allowNull: false,
      },
      thumbnail: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      permalink: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      search_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'search',
          key: 'ID',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  },
};
