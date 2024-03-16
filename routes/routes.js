const express = require('express')
const router = express.Router()

//criando uma função
router.get('/', function(req, res){
    res.json({})
})


module.exports = router