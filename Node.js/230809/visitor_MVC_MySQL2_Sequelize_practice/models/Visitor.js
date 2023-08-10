
const Visitor = function(sequelize, DataTypes) {

    const model = sequelize.define(
        'practice',
        {
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
            name : {
                type : DataTypes.STRING(20),
                allowNull : false,
            },
            comment : {
                type : DataTypes.TEXT('medium'),
                allowNull : true,
            }
        },
        {
            tableName : 'practice',
            freezeTableName : true,
            timestamps : false,
        }
    )
    return model;
};

export default Visitor;

