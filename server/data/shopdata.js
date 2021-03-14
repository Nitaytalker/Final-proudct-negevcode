const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/shop',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('connect to MondogDB shop'));