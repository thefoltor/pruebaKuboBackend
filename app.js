const express = require('express');
const bodyParser = require("body-parser");

const sequelize = require('./utils/entities')

const app = express();

const movieRouter = require('./routes/movie');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,OPC-Auth-Token');
    next();
});

app.use(bodyParser.json());
app.use(movieRouter);


sequelize
.sync({force:true})
.then(result =>{
    console.log(result);
    app.listen(process.env.PORT || 3000);
})
.catch(err => {
    console.log(err);
});