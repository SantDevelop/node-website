require('dotenv').config()
// .env

const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("<h1>hola mundo</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>acerca de...</h1>")
})

app.get('/env', (req, res) => {
    const t =  "<h1> HOST: " + process.env.MYSQL_HOST + "</h1>"
    const t2 =  "<h1> USER: " + process.env.MYSQL_USER + "</h1>"
    const t3 =  "<h1> PASS: " + process.env.MYSQL_PASS + "</h1>"
    res.send(t + t2 + t3)
})

console.log(process.env.MYSQL_HOST)
// console.log(process.env.SOLOM)

app.listen(port)
console.log('listening on port', port)


// EJECUTAR
// npm run devstart