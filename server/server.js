const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const makeRoutes = require('./routes/make')

app.use(bodyParser.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost/loteria', (err)=> {
    if(err) throw err
    console.log('connected to database')
})

app.use('/cards', require('./routes/cards'))
app.use("/user", userRoutes);
app.use("/make", makeRoutes);

app.listen(3500, () => {
    console.log('server is running on port 3500')
})