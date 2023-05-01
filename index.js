const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

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
    {
      "id": 3,
      "nome": "Pedro",
      "idade": 28,
      "email": "pedro@example.com"
    },
    {
      "id": 4,
      "nome": "Ana",
      "idade": 35,
      "email": "ana@example.com"
    },
    {
      "id": 5,
      "nome": "Lucas",
      "idade": 22,
      "email": "lucas@example.com"
    }
  ]

app.get('/', function (req, res) {
    
      console.log(dados)
  res.json(dados)
})


app.get("/produtos/:id", (req, res) => {

    const id = req.params.id;
    const produto = dados.find(item => item.id == id);
    
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).send("Produto não encontrado.");
    }
  });
  

app.listen(process.env.PORT || 3000)