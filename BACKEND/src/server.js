const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();

const mongoURL = 'mongodb+srv://devmatsu:rocketseat@devcluster-em0zg.mongodb.net/omnistack?retryWrites=true&w=majority';
//const mongoURL = 'mongodb://localhost/Tindev';

mongoose.connect(mongoURL, { useNewUrlParser: true });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
