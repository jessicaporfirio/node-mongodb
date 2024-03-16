const express = require('express') //importing the express module
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const routes = require('./routes/routes')
app.use('/', routes)

app.listen(3000, function(){
    console.log('Servidor executando com sucesso')
})





/*Criando rota
app.get('/', function (req, res){
    res.json({msg: "rota princiapl"})
}) */