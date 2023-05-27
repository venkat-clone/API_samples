const express = require('express');
const todoApi = require('./mobule/todo/routes');
const todoV2Api = require('./mobule/todoV2/routes');
const createError = require('http-errors')
const db = require('./helpers/init_db')
const app = express();
const url = process.env.MONGODB_URI || 'no url'
console.debug(url)


app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Welcome to My API')
})


app.use('/todo/api', todoApi)
app.use('/todo/V2/api', todoV2Api)
app.use(function(req, res,next){
    next(createError(404))
});

app.use((err,req,res,next)=>{
    res.statusCode = err.statusCode || 500
    res.send({
        success:false,
        message:err.message || 'Server error'
    })
})



app.listen(3000,()=>{
    console.log("Listening on port 3000")
})


