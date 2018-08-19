const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const chalk = require('chalk');

require('dotenv').config();


const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

const app = express();

massive(CONNECTION_STRING).then( (mySQLDatabase) =>{
    console.log(chalk.bgYellow(chalk.black('Database Has Connected')));
    app.set('db', mySQLDatabase)
})

app.use(express.static(`${__dirname}/../build`));
app.use( bodyParser.json() );



app.listen(SERVER_PORT, () => console.log(chalk.bgRed.black(`This is the port your looking for: ${SERVER_PORT}`)));