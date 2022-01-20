const { DataTypes, Model } = require('sequelize');

module.exports = class Review extends Model {
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
        rating: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        context: {
          type: DataTypes.TEXT,
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
    db.Review.belongsTo(db.User, { foreginKey: 'user_id', targetKey: 'id' });
    db.Review.belongsTo(db.Book_list, { foreginKey: 'book_id', targetKey: 'id' });
  }
};
