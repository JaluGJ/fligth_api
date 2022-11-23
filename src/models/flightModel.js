const { DataTypes } = require("sequelize")

module.exports = (db) => {
    db.define("Flight", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allownull:false,
            primaryKey: true
        },
        YEAR:{
            type: DataTypes.INTEGER
        },
        MONTH:{
            type: DataTypes.INTEGER
        },
        DAY:{
            type: DataTypes.INTEGER
        },
        DAY_OF_WEEK:{
            type: DataTypes.INTEGER
        },
        FLIGHT_NUMBER:{
            type: DataTypes.INTEGER
        },
        TAIL_NUMBER:{
            type: DataTypes.STRING
        },
        SCHEDULED_DEPARTURE:{
            type: DataTypes.STRING
        },
        DEPARTURE_TIME:{
            type: DataTypes.STRING
        },
        DEPARTURE_DELAY:{
            type: DataTypes.STRING
        },
        TAXI_OUT:{
            type: DataTypes.STRING
        },
        WHEELS_OFF:{
            type: DataTypes.STRING
        },
        SCHEDULED_TIME:{
            type: DataTypes.STRING
        },
        ELAPSED_TIME:{
            type: DataTypes.STRING
        },
        AIR_TIME:{
            type: DataTypes.STRING
        },
        DISTANCE:{
            type: DataTypes.STRING
        },
        WHEELS_ON:{
            type: DataTypes.STRING
        },
        TAXI_IN:{
            type: DataTypes.STRING
        },
        SCHEDULED_ARRIVAL:{
            type: DataTypes.STRING
        },
        ARRIVAL_TIME:{
            type: DataTypes.STRING
        },
        ARRIVAL_DELAY:{
            type: DataTypes.STRING
        },
        DIVERTED:{
            type: DataTypes.STRING
        },
        CANCELLED:{
            type: DataTypes.STRING
        },
        CANCELLATION_REASON:{
            type: DataTypes.STRING
        },
        AIR_SYSTEM_DELAY:{
            type: DataTypes.STRING
        },
        SECURITY_DELAY:{
            type: DataTypes.STRING
        },
        AIRLINE_DELAY:{
            type: DataTypes.STRING
        },
        LATE_AIRCRAFT_DELAY:{
            type: DataTypes.STRING
        },
        WEATHER_DELAY:{
            type: DataTypes.STRING
        },
        is_deleted:{
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: false
        }

    }, { timestamps: false })
}