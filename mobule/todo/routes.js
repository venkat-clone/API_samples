const express = require('express');

const {failedResponse, successResponse}  = require('./responceHandler')

const controller = require('./controller')
const {updateTodo} = require("./controller");
const app = express.Router();

app.get('/',(req, res)=>{
    res.send('Welcome to Todo APIS',)
})

app.post('/create', async (req, res)=>{
    try{
        const todo = req.body;
        const newTodo = await controller.createTodo(todo);
        res.send(successResponse(newTodo));
    }catch (e){
        console.debug(e);
        res.status(400).send(failedResponse('failed to create Todo'))
    }
})

app.get('/delete/:id', async(req, res)=>{
    try{
        const todo = req.params.id;
        const newTodo = await controller.deleteTodo(todo);
        res.send(successResponse(newTodo));
    }catch (e){
        console.debug(e);
        res.status(400).send(failedResponse('failed to create Todo'))
    }
})

app.get('/list',async (req,res)=>{
    try{
        const todoList = await controller.getTodoList();
        res.send(successResponse(todoList));
    }catch (e){
        console.debug(e);
        res.status(400).send(failedResponse('failed to fetch todos'))
    }
})

app.post('/update/:id',async (req, res)=>{
    const id = req.params.id;
    const todo = req.body;
    if(!id || !todo.todo){
        res.send(failedResponse('invalid id or todo'))
    }
    try{
        const updated = await updateTodo(id,todo);
        res.send(successResponse(updated))
    }catch (e) {
        console.log(e)
        res.send(failedResponse('failed to update the todo'))
    }

})


module.exports = app;
