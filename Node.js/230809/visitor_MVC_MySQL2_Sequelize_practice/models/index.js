'use strict';

// const Sequelize = require('sequelize');
import Sequelize from 'sequelize'

// __dirname 현재경로를 찾아옴
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// const config = require(__dirname + '/../config/config.json')['development'];

import configs from '../config/config.json' assert{type: "json"};
const config = configs['development'];
const db = {};



const sequelize = new Sequelize(config.database, config.username, config.password, config);



db.sequelize = sequelize;
db.Sequelize = Sequelize;

import visitor from './Visitor.js';
db.visitor = visitor(sequelize, Sequelize)

export default db;
