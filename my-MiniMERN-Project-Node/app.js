const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//routes
const books = require('./routes/api/books');
const app = express();


//Connect Database
connectDB();

//cors
app.use(cors({origin: true, credentials: true}));
//Middleware
app.use(express.json({extended: false}));

//API endpoints
app.get('/',(req,resp)=>{
    resp.send('Hello World!!!');
});

//use Routes
app.use('/api/books', books);


const port = process.env.PORT || 8082;
//listener
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});