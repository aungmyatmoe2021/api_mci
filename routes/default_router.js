const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).send("<h1>Welcome from Myanmar Culture Information Version 1.0.0</h1>")
})

module.exports = router;