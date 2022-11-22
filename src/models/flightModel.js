const { DataTypes } = require("sequelize")

module.exports = (db) => {
    db.define("Flight", {
        YEAR:{
            type: DataTypes.NUMBER
        },
        MONTH:{
            type: DataTypes.NUMBER
        },
        DAY:{
            type: DataTypes.NUMBER
        },
        DAY_OF_WEEK:{
            type: DataTypes.NUMBER
        },
        AIRLINE:{
            type: DataTypes.STRING
        },
        FLIGHT_NUMBER:{
            type: DataTypes.NUMBER
        },
        TAIL_NUMBER:{
            type: DataTypes.STRING
        },
        ORIGIN_AIRPORT:{
            type: DataTypes.STRING
        },
        DESTINATION_AIRPORT:{
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
        }

    }, { timestamps: false })
}