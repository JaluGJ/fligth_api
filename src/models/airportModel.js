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
            type: DataTypes.DOUBLE
        },
        LONGITUDE: {
            type: DataTypes.DOUBLE
        },
        is_deleted:{
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: false
        }
    }, { timestamps: false })
}