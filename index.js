const express = require('express')
const app = express()

app.get('/', function (req, res) {
    const dados = [
        {
            "id": 1,
            "nome": "João",
            "idade": 25,
            "email": ""
        },
        {
            "id": 2,
            "nome": "Maria",
            "idade": 30,
            "email": ""
        },
    ]
  res.json(dados)
})

app.listen(process.env.PORT || 3000)