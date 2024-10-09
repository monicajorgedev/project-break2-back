require('dotenv').config()
const express = require('express');
const app = express();
PORT = process.env.PORT 
const bodyParser = require('body-parser')
const dbConnection = require('./config/db')
const router = require('./routes/productRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/', router)


dbConnection()

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});