const fs = require("fs");

function airlineSeeder() {
	csv = fs.readFileSync("../../archive/airlines.csv")
	let array = csv.toString().split("\n")
	let data = []
	array.forEach((el, i) => {
		if (i === 0) return
		if (!el) return
		info = { IATA_CODE: el.split(",")[0], AIRLINE: el.split(",")[1] }
		return data.push(info)
	})
	return data
}


// console.log(airlineSeeder())

module.exports = {
	airlineSeeder
}