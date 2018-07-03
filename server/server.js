const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')


app.use(bodyParser.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost/loteria', (err)=> {
    if(err) throw err
    console.log('connected to database')
})

app.use('/card', require('./routes/card'))
app.use("/user", userRoutes);

app.listen(3500, () => {
    console.log('server is running on port 3500')
})