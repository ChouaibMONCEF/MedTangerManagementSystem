const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({
    path: './config.env'
})

process.on('uncaughtException', err => {
    console.log('Uncuaght exception!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1)
})

const app = require('./app')
const database = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose.connect(database).then(con => {
    console.log('Connected to DB!!');
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
} )

process.on('unhandledRejection', err => {
    console.log('Unhandled rejection!! shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1)
    })
})