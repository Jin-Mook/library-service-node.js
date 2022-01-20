const { DataTypes, Model } = require('sequelize');

module.exports = class Book_list extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        book_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        publisher: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        author: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        pages: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        isbn: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        link: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        book_image: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        remain: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 5,
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
    db.Book_list.hasMany(db.Book_borrow_return, { sourceKey: 'id', foreignKey: 'book_id' });
    db.Book_list.hasMany(db.Review, { sourceKey: 'id', foreignKey: 'book_id' });
  }
};
