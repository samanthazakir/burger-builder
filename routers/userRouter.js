const express = require('express');
const bcrypt = require('bcrypt');
const Joi  = require('joi');
const _ = require('lodash'); //lodash npm likhe google korle jana jabe aro details

const { User, validate } = require('../models/user');
//const { route } = require('../app');

const router  = express.Router();

const newUser = async (req, res) => {
    
    const { error } =  User.validate(req.body);
    if (error) return res.status(400).send(error);
    
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered');


    user = new User(_.pick(req.body, ['email', 'password']));

    const salt  = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const token = user.generateJWT();

    const result = await user.save();

    return res.status(201).send({
        token: token,
        user: _.pick(result, ['_id', 'email'])
    });
}

router.route('/')
    .post(newUser)

router.route('/auth')
    .post()


module.exports = router;