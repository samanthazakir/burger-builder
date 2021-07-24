const {Schema, model } = require('mongoose');

const userSchema = Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        tye:  String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    }
})