'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopingOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ShopingOrder.init({
    orderNumber: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ShopingOrder',
  });
  ShopingOrder.addHook('beforeCreate', (order) => {
    order.orderNumber = generateOrderNumber();
  });

  function generateOrderNumber() {
    const timestamp = Date.now().toString();
    const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return timestamp + randomDigits;
  }


  return ShopingOrder;
};