function index(req, res) {
    res.render('index', {
        title: 'Página Inical'
    })
}

module.exports = {
    index
}