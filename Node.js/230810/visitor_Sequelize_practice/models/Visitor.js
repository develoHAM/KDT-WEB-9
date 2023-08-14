

const modelVisitor = function(sequelize, DataTypes) {
    //sequelize는 models/index.js에 있는 sequelize
    //DataTypes는 modes/index.js에 있는 Sequelize
    const model = sequelize.define(
        'visitor',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: {
                type: DataTypes.TEXT('medium'),
                allowNull: false
            } 
        }, {
            freeTableName: true,
            tableName: 'visitor',
            timestamps: true,
        }
    )
    return model;
}

module.exports = modelVisitor;

