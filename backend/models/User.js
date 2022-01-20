const { DataTypes, Model } = require('sequelize');

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        user_password: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        nickname: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        social_login: {
          type: DataTypes.STRING(255),
          defaultValue: 'local',
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: false,
        paranoid: false,
        underscored: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Book_borrow_return, { sourceKey: 'id', foreignKey: 'user_id' });
    db.User.hasMany(db.Review, { sourceKey: 'id', foreignKey: 'user_id' });
  }
};
