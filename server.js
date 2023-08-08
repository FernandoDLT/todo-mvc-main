const express = require('express')
const app = express()
// const MongoClient = require('mongodb').MongoClient;
const PORT = 3000;
require('dotenv').config();
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${PORT} you better catch it!`)
})    