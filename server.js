// dotennv, express, morgan, bcrypt, jsonwebtoken, joi, lodash, cors
// joi user theke input validation kore, eta mongoose er validation theke easier, cleaner, joi is recommended, database level er validation mongoose die possible
//Connect MongoDB
//Run Server
const dotenv = require('dotenv');
dotenv.config();
const mongoose =require('mongoose');
const app = require('./app');

mongoose.connect(process.env.MONGODB_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreatedIndex: true
})
    .then(() => console.log("connected to mongodb"))
    .catch(err => console.log("mongogb connection failed"));

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})