const express = require('express');
const router = express.Router();
const { getUsers, addUser } = require('../controllers/controller');

router.get('/api/users', getUsers);
router.post('/api/users', addUser);

module.exports = router;
