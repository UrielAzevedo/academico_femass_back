const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getAll)
router.post('/post', controller.post)
router.delete('/deleteNome', controller.deleteNome)

module.exports = router