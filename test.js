const Joi  = require('joi');
//npm joi likhe google search korle bakigula paoa jabe
const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
});

const user = {
    email: "samanthazakir@gmail.com",
    password: "1234"
}

const {error} = schema.validate(user);
console.log(error.details[0].message); //single line e error msg ta nie ashtese