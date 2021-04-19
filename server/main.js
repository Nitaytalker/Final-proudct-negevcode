
const express = require('express');
const cors = require('cors');
const app = express();
const master = require('./router/master')
const users = require('./router/users')
const email = require('./router/email')
const blog = require('./router/blog')

const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/blog',blog);
app.use('/products',master);
app.use('/users',users);
app.use('/email',email);
app.use('/',blog);



app.listen(process.env.PORT ||3002,()=>console.log('server run...'))

// const devUrl = "http://localgost:3002";

// products.map(ele => {
//     return (
//         <img src={`${devUtl}/images/${ele.img}`}/>
//     )
// })