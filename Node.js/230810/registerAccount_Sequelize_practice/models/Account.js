const { DataTypes } = require("sequelize");

const Account = function(sequelize) {
    
    const model = sequelize.define(
        'newuser',
        {
            id : {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            userid : {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name : {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            pw : {
                type: DataTypes.STRING(20),
                allowNull: false,
            }
        },
        {
            indexes: [
                {
                  unique: true,
                  fields: ['userid']
                }
            ]
        }
    )
    return model;
};

module.exports = Account;