const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const User = require('./User');
const Book_list = require('./Book_list');
const Review = require('./Review');
const Book_borrow_return = require('./Book_borrow_return');
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Book_list = Book_list;
db.Review = Review;
db.Book_borrow_return = Book_borrow_return;

User.init(sequelize);
Book_list.init(sequelize);
Review.init(sequelize);
Book_borrow_return.init(sequelize);

User.associate(db);
Book_list.associate(db);
Review.associate(db);
Book_borrow_return.associate(db);

module.exports = db;
