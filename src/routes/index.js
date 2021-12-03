const router = require('express').Router()

const IndexController = require('../controllers/controllerIndex')
const CustomersController = require('../controllers/controllerCustomers')


// rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo teste'
    })
})

router.get('/', IndexController.index)

// registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// listar
router.get('/list', CustomersController.list)

module.exports = router