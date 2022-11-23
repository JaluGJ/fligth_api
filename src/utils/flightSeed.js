const fs = require("fs");

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1].join(' - ');
}

function flightSeeder() {
  let manifest = fs.readFileSync("./archive/flights/manifest.txt").toString().split("\r\n")
  // console.log("manifest", manifest)
  let info = []
  // manifest.forEach((csvFile) => {
    let flight = fs.readFileSync(`./archive/flights/${manifest[0]}`).toString().split("\n")
    flight.forEach((el, i) => {
      let data = el.split(`","`)
      if (i === 0) return
      let fli = {
        YEAR: data[0]?.slice(1, 9),
        MONTH: data[1],
        DAY: data[2],
        DAY_OF_WEEK: data[3],
        AIRLINE: data[4],
        FLIGHT_NUMBER: data[5],
        TAIL_NUMBER: data[6],
        ORIGIN_AIRPORT: data[7],
        DESTINATION_AIRPORT: data[8],
        SCHEDULED_DEPARTURE: data[9],
        DEPARTURE_TIME: data[10],
        DEPARTURE_DELAY: data[11],
        TAXI_OUT: data[12],
        WHEELS_OFF: data[13],
        SCHEDULED_TIME: data[14],
        ELAPSED_TIME: data[15],
        AIR_TIME: data[16],
        DISTANCE: data[17],
        WHEELS_ON: data[18],
        TAXI_IN: data[19],
        SCHEDULED_ARRIVAL: data[20],
        ARRIVAL_TIME: data[21],
        ARRIVAL_DELAY: data[22],
        DIVERTED: data[23],
        CANCELLED: data[24],
        CANCELLATION_REASON: data[25],
        AIR_SYSTEM_DELAY: data[26],
        SECURITY_DELAY: data[27],
        AIRLINE_DELAY: data[28],
        LATE_AIRCRAFT_DELAY: data[29],
        WEATHER_DELAY: data[30]?.slice(0, -1)
      }
      return info.push(fli)
    })
  // })
  return info
}

// console.log(flightSeeder())

module.exports = {
  flightSeeder
}

 // let flight = fs.readFileSync(`../../archive/flights/${manifest[1]}`).toString().split("\n")
 // flight.forEach((el, i) => {
 //   let data = el.split(`","`)
 //   if (i === 0) return
 //   let fli = {
 //     YEAR:data[0]?.slice(1,9),
 //     MONTH:data[1],
 //     DAY:data[2],
 //     DAY_OF_WEEK:data[3],
 //     AIRLINE:data[4],
 //     FLIGHT_NUMBER:data[5],
 //     TAIL_NUMBER:data[6],
 //     ORIGIN_AIRPORT:data[7],
 //     DESTINATION_AIRPORT:data[8],
 //     SCHEDULED_DEPARTURE:data[9],
 //     DEPARTURE_TIME:data[10],
 //     DEPARTURE_DELAY:data[11],
 //     TAXI_OUT:data[12],
 //     WHEELS_OFF:data[13],
 //     SCHEDULED_TIME:data[14],
 //     ELAPSED_TIME:data[15],
 //     AIR_TIME:data[16],
 //     DISTANCE:data[17],
 //     WHEELS_ON:data[18],
 //     TAXI_IN:data[19],
 //     SCHEDULED_ARRIVAL:data[20],
 //     ARRIVAL_TIME:data[21],
 //     ARRIVAL_DELAY:data[22],
 //     DIVERTED:data[23],
 //     CANCELLED:data[24],
 //     CANCELLATION_REASON:data[25],
 //     AIR_SYSTEM_DELAY:data[26],
 //     SECURITY_DELAY:data[27],
 //     AIRLINE_DELAY:data[28],
 //     LATE_AIRCRAFT_DELAY:data[29],
 //     WEATHER_DELAY:data[30]?.slice(0,-1)
 //   }