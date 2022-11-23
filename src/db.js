require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');

const {
  DATABASE_URL,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_HOST_PORT,
  DB_DATABASE,
  DB_DIALECT,
} = process.env;

const db = new Sequelize(
  DATABASE_URL ||
    `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_HOST_PORT}/${DB_DATABASE}`,{
        logging: false, 
        native: false,
      }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(db));

let entries = Object.entries(db.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
db.models = Object.fromEntries(capsEntries);


const {Airline, Airport, Flight} = db.models;

Flight.hasOne(Airline)
Airline.belongsTo(Flight)

Flight.hasOne(Airport, {as: "ORIGIN_AIRPORT"})
Flight.hasOne(Airport, {as: "DESTINATION_AIRPORT"})
Airport.belongsTo(Flight)


db.authenticate()
  .then(() => console.log("conectado"))
  .catch((e) => console.log(e));

  module.exports = {
    ...db.models, 
    db, 
  };