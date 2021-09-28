//get  --  login
//post  --  sign

const express = require('express');
const router = express.Router();
const User = require('../models/users')


router.post("", async (req, res) => {
    const user = await User.create(req.body);

    return res.status(201).send({ user });
});

router.get("", async (req, res) => {
    const user = await User.find();

    return res.status(200).send({ user });
});

module.exports = router;
