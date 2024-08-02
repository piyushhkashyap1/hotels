const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = 'mongodb://piyushh:okokok@ac-wbd2dgc-shard-00-00.mlnjj0c.mongodb.net:27017,ac-wbd2dgc-shard-00-01.mlnjj0c.mongodb.net:27017,ac-wbd2dgc-shard-00-02.mlnjj0c.mongodb.net:27017/?ssl=true&replicaSet=atlas-z8zou8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=firstCluster';
// const mongoURL=process.env.MONGODB_URL;


mongoose.connect(mongoURL, {
    // userNewURLParser: true,
    // useUnifiedTopology: true,
    // userFindandModify :false
})

const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connnected to mongo db server');
})
db.on('error', (err) => {
    console.log('mongoDB connection error',err);
})
db.on('disconnected', () => {
    console.log('Connected to mongo db server');
})

module.exports=db;


// hellosjcnsicnscnsd