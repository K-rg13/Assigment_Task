const express = require('express')
const app = express()
const port = 3000
var mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require( 'cors')
app.use(cors())
app.use(bodyParser.json());


const createRoute = require('./routes/posts')
const loginRoute = require('./routes/login')
app.use('/create',createRoute)
app.use('/login',loginRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  mongoose.connect("mongodb+srv://cluster0.m8qpp.mongodb.net/dbUser",{
      "auth": {
        "authSource": "admin"
      },
      "user": "dbUser",
      "pass": "Qwerty@13"
  },()=>{
  
  console.log("Database connected!");
})
})




