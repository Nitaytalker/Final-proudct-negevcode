const express = require('express');
const cors = require('cors');
const app = express();
const master = require('./router/master')
const users = require('./router/users')

const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/products',master);
app.use('/users',users);

app.listen(3002,()=>console.log('server run...'))

// const devUrl = "http://localgost:3002";

// products.map(ele => {
//     return (
//         <img src={`${devUtl}/images/${ele.img}`}/>
//     )
// })