const customersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

async function list(req, res) {
    const users = await customersModel.find()

    res.render('listUsers', {
        title: 'Listagem de Usuarios',
        users
    })
}

function index(req, res) {
    res.render('register', {
        title: defaultTitle
    })
}

async function add(req, res) {
    const {
        name,
        age, 
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new customersModel({
        name,
        age,
        email,
        password: passwordCrypto
    })
    
    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso'
    })
}

function update() {

}

function remove() {

}

module.exports = {
    index,
    list,
    add
}