

const Todo = require('./todo.js')


const createTodo = async (todo)=>{
    const newTodo = await Todo.create({
        todo: todo.todo,
        creationDate: Date.now(),
        isComplete: todo.isComplete || false
    })

    const res = await  newTodo.save();
    return res;
}
const updateTodo = async (id,todo)=>{
    return Todo.update(id, {
        todo: todo.todo,
        creationDate: Date.now(),
        isComplete: todo.isComplete || false
    });
}
const deleteTodo = async (id)=>{
    return Todo.findOne({_id:id})
}

const getTodoList = async () =>{
    return Todo.findAll({});
}


module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodoList

}