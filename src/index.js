const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("<h1>hola mundo</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>acerca de...</h1>")
})


app.listen(3000)
console.log('listening on port 3000')