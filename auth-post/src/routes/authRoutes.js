const express = require('express');
const { regUser, loginUser } = require("../Controllers/controllers");
const router = express.Router();

router.post('/regUser', regUser);
router.post('/loginUser', loginUser);

module.exports = router;