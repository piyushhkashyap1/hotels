const mongoose = require('mongoose')
const mongoURL = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL, {
    // userNewURLParser: true,
    // useUnifiedTopology: true,
    // userFindandModify :false,
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


