const {DataTypes} = require("sequelize")

module.exports = (db) => {
    db.define("Airline", {
        IATA_CODE: {
            type: DataTypes.STRING,
            allownull:false,
            primaryKey: true
        },
        AIRLINE:{
            type: DataTypes.STRING,
            allownull: false
        },
        is_deleted:{
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: false
        }
    },{timestamps:false})
}