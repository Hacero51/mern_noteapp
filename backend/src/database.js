const mongoose =  require('mongoose');

//const MDB_URI = `mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;
const MONGODB_URI = `mongodb+srv://Hacero51:Ufodesdeel92@cluster0.atwvp.mongodb.net/mern_noteapp?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.dir('Database MongoDB is connect!');
});