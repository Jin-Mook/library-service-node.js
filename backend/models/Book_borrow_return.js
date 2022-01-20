const { DataTypes, Model } = require('sequelize');

module.exports = class Book_borrow_return extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        book_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        borrow_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        return_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        returned_date: {
          type: DataTypes.BOOLEAN,
          defaultValue: 1,
        },
      },
      {
        sequelize,
        modelName: 'Book_list',
        tableName: 'Book_lists',
        timestamps: false,
        paranoid: false,
        underscored: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    db.Book_borrow_return.belongsTo(db.User, { foreignKey: 'user_id', targetKey: 'id' });
    db.Book_borrow_return.belongsTo(db.Book_list, { foreignKey: 'book_id', targetKey: 'id' });
  }
};
