const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');

require('dotenv').config();


const {
    SERVER_PORT
} = process.env;

const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use( bodyParser.json() );

app.listen(SERVER_PORT, () => console.log(chalk.bgRed.black(`This is the port your looking for: ${SERVER_PORT}`)));