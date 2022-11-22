const { DataTypes } = require("sequelize")

module.exports = (db) => {
    db.define("Airport", {
        IATA_CODE: {
            type: DataTypes.STRING,
            allownull: false,
            primaryKey: true
        },
        AIRPORT: {
            type: DataTypes.STRING,
        },
        CITY: {
            type: DataTypes.STRING,
        },
        STATE: {
            type: DataTypes.STRING
        },
        COUNTRY: {
            type: DataTypes.STRING
        },
        LATITUDE: {
            type: DataTypes.FLOAT
        },
        LONGITUDE: {
            type: DataTypes.FLOAT
        }
    }, { timestamps: false })
}