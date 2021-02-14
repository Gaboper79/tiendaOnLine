const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const app = express();

//helmet more securituy
app.use(helmet());

//
app.use(morgan("combined"));
//allow cors
app.use(cors());

//allow json request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//define el acceso a file static public
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
