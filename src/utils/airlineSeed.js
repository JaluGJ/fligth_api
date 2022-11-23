const fs = require("fs");

function airlineSeeder() {
	let csv = fs.readFileSync("./archive/airlines.csv")
	let array = csv.toString().split("\n")
	// console.log(array)
	let data = []
	array.forEach((el, i) => {
		if (i === 0) return
		if (!el) return
		info = { IATA_CODE: el.split(",")[0], AIRLINE: el.split(",")[1] }
		return data.push(info)
	})
	return data
}


// airlineSeeder()

module.exports = {
	airlineSeeder
}