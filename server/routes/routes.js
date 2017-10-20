const express = require('express');
const router = express.Router();
// const auth = require('./../helpers/authenticate');
const TFC = require('./../controllers/tfc');

router.post('/', TFC.register)

module.exports = router;