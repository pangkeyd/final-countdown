const express = require('express');
const router = express.Router()
const Final = require('../controllers/index')

router.get('/', Final.getData)

router.post('/', Final.saveData)

router.put('/:fbId', Final.updateData)

router.delete('/:fbId', Final.deleteData)

module.exports = router
