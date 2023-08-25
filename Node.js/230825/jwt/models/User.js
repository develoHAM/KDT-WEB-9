const { DataTypes } = require('sequelize');

const Model = (sequelize) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //NOT NULL
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: 'asdf', //기본값
        },
        pw: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    });
};

module.exports = Model;
