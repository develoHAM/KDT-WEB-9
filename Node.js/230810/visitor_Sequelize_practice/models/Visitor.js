

const modelVisitor = function(sequelize, DataTypes) {
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
            timestamps: true
        }
    )
    return model;
}

module.exports = modelVisitor;