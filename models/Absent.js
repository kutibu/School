const { DataTypes, Model } = require('sequelize');

module.exports = class Absent extends Model {
    static init(sequelize) {
        return super.init({
            NomEleve: {
                type: DataTypes.STRING
            },
            Classe: {
                type: DataTypes.STRING
            },
            Date: {
                type: DataTypes.DATE
            },
            Cours:{
                type: DataTypes.STRING
            },
            Heure: {
                type: DataTypes.TIME
            }

        }, {
            tableName: 'Absent',
            sequelize: sequelize

        })
    }
}