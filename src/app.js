const express = require("express");
const morgan = require("morgan");
const routes = require("./routes")
const cors = require("cors");


const server = express();

server.name = "API";

server.use(cors({ origin: "*" }));
server.use(express.json());
server.use(morgan("dev"));
server.use("/", routes)
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    errorLog(err, "updateUser")
    console.error(err);
    res.status(status).send(message);
});

module.exports = server