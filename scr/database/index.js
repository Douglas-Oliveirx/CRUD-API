const mongoose = require('mongoose');
const DB_ATLAS_URL = ''



mongoose.connect(DB_ATLAS_URL,{},)
    .then(()=>{
        console.log("Conectado com sucesso!");
    })
    .catch((err)=>{
        console.log(err)
    })

mongoose.Promise = global.Promise;

module.exports = mongoose