const customersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

async function list(req, res) {
    const users = await customersModel.find()

    res.render('list', {
        title: 'Listagem de Usuários',
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

async function formEdit(req, res) {
    const { id } = req.query

    const user = await customersModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário',
        user
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email
    } = req.body

    const { id } = req.params

    const user = await customersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar Usuário',
        user,
        message: 'Usuário alterado com sucesso!' 
    })

}

function remove() {

}

module.exports = {
    index,
    list,
    add,
    formEdit,
    edit
}