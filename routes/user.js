// routes/user.js
const express = require('express');
const validateUser = require('../middleware/validation');

const router = express.Router();

router.post('/', validateUser, (req, res) => {
    res.status(200).json({ message: 'User registered successfully!' });
});

module.exports = router;
