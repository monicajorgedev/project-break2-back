require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
PORT = process.env.PORT 
const bodyParser = require('body-parser')
const dbConnection = require('./config/db')
const path = require('path')
const admin = require('firebase-admin');
const serviceAccount = require('./config/firebase')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount) 
})

const router = require('./routes/productRoutes')
const authRouter = require('./routes/authRoutes')


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)
app.use('/', authRouter)

dbConnection()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});