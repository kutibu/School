const { DataTypes, Model } = require('sequelize');

module.exports = class Appel extends Model {
    static init(sequelize) {
        return super.init({
            AppelId: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            NomEleve: {
                type: DataTypes.STRING
            },
            Present: {
                type: DataTypes.STRING
            }
        }, {
            tableName: 'Appel',
            sequelize: sequelize

        })
    }
}