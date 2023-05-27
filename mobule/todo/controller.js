

const Todo = require('./todoSchema.js')


const createTodo = async (todo)=>{
    const newTodo = new Todo({
        todo:todo.todo,
        creationDate:Date.now(),
        isComplete:todo.isComplete||false
    });
    const res = await  newTodo.save();
    return res;
}
const updateTodo = async (id,todo)=>{
    const newTodo = new Todo({
        todo:todo.todo,
        creationDate:Date.now(),
        isComplete:todo.isComplete||false
    })
    return Todo.findByIdAndUpdate(id, {
        todo:todo.todo,
        creationDate:Date.now(),
        isComplete:todo.isComplete||false
    });
}
const deleteTodo = async (id)=>{
    return Todo.findByIdAndDelete(id)
}

const getTodoList = async () =>{
    return Todo.find({});
}


module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodoList

}