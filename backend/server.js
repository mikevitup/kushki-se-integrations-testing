const express = require("express")
const cors = require("cors")

var LocalStorage = require('node-localstorage').LocalStorage,
  localStorage = new LocalStorage('./scratch')

const app = express()
app.use(cors({
  origin: '*'
}))

// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}))

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome Sales Engineering Kushki Implementation."
  })
})

// Token available
app.get("/token", cors(), (req, res) => {
  var backToken = localStorage.getItem("token")
  res.json({
    token: backToken
  })
})

// Responde for Cajita and Kajita
app.post("/confirm", cors(), (req, res) => {
  body = req.body
  localStorage.setItem("token", body.kushkiToken)
  res.redirect('http://localhost:4200/confirm')
})

app.post("/confirmSubscriptions", cors(), (req, res) => {
  body = req.body
  localStorage.setItem("token", body.kushkiToken)
  res.redirect('http://localhost:4200/confirmSubscriptions')
})

// Responde for Kushki.js
app.post("/confirmJS", (req, res) => {
  var body = req.body
  localStorage.setItem("token", body.token)
})

// set port, listen for requests
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})