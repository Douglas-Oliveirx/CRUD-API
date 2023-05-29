const express = require('express')
const app = express()

app.get('/', (req, resp)=>{
    //resp.send("Hello World!")
    resp.json({
        error: false,
        message: 'Sucesso!'
    })
})

app.listen(3000, ()=>{
    console.log('Servidor ativo!')
})