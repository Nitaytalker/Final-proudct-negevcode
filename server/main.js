const express = require('express');
const cors = require('cors');
const app = express();
const master = require('./router/master')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/',master);

app.listen(3002,()=>console.log('server run...'))