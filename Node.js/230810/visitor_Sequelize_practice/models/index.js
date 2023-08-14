'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 정의
db.Visitor = require('./Visitor')(sequelize, Sequelize)
// const a = require('./Visitor')
// const b = a(sequelize, Sequelize)
// db.Visitor = b

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

