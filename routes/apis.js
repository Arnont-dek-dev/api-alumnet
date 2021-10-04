var express = require('express');
var router = express.Router();
const db = require('./queries');

router.get('/users',db.getUsers);
router.post('/users',db.getUsers);

module.exports = router;