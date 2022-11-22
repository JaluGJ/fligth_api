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
        }
    },{timestamps:false})
}