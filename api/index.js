const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const WebSocket = require('ws')
const mongoose = require('mongoose')
const route =  require('./routes/route')

// Database Connection
mongoose.connect('mongodb+srv://cypher0:it4lXXDY8Wlu19BM@editing.azvv8di.mongodb.net/?retryWrites=true&w=majority&appName=editing')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})


const app = express()

// MiddleWares
app.use(bodyParser.json())
app.use(cors())


// Routes
app.use('/route',route)




app.listen(5000, () => console.log('Server started on port 5000'))


