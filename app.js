const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('We are on home')
});



mongoose.connect('mongodb://localhost:27017/app', 
{ useUnifiedTopology: true },
{ useNewUrlParser: true },  () => 
    console.log('connect to DB'),
    
);



app.listen(3000);