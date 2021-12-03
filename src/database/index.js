const mongoose = require('mongoose')

function connect() {
    // criando conexao com banco de dados
    mongoose.connect('mongodb://localhost:27017/projeto-crud?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database!')
    })

    db.on('erro', console.error.bind(console, 'connection error: '))
}

module.exports = { 
    connect 
}
