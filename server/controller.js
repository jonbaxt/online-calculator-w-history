const chalk = require('chalk');

module.exports = {
    getCurrentNumbers: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.getCalculations().then( (result) => 
        res.status(200).send(result)).catch( (err) => {
            console.log(chalk.red('Had error while communicating with database', err))
            res.status(400).send(err)})
    },
};