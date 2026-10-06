const express = require('express');
const {register, login } = require("../Controllers/controllers");
const router = express.Router();

router.post('/regUser', register);
router.post('/loginUser', login);

module.exports = router;