const mongoose = require('mongoose')

async function main(){

    try {
        //o await evita que a linha debaixo seja executada antes da primeira. async sempre tem que colocar quando for usar o await. Pois pode demorar a se conectar.
    await mongoose.connect('mongodb+srv://jessypnpaiva18:<password></password>@cluster0.7d2slb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Banco ok');       
    } catch (error) {
        console.log('Erro: ' + error);      
    }

    
}

module.exports = main