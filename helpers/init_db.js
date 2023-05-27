
const url = process.env.MONGODB_URI || 'mongodb://MongoDBPass:MongoHifi@cluster0-shard-00-00.v9ml5.mongodb.net:27017,cluster0-shard-00-01.v9ml5.mongodb.net:27017,cluster0-shard-00-02.v9ml5.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fd2bqm-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoose = require('mongoose');


mongoose.connect(url,{dbName:'nodejs'})
    .then(()=>{
        console.log(`mongodb connected.`)
    })
    .catch((err)=>console.log(err.message))

mongoose.connection.on('connected',()=>{
    console.log(`Mongoose connected to db`)
})

mongoose.connection.on('error',(err)=>console.log(err.message))

mongoose.connection.on('disconnected',()=>console.log(`Mongoose connection is disconnected`))


process.on("SIGINT",async()=>{
    await mongoose.connection.close()
    process.exit(0)
})
