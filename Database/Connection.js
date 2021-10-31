const mongoose=require('mongoose');
require('dotenv').config();

MongoUri=process.env.Mongo;

const uri = 'mongodb+srv://universitySchema:G5h2yv0u2HyIAoEN@cluster0.dq76n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const connection = mongoose.connect(uri).then(()=> console.log('connected to cloud Atlas'))


module.exports={mongoose,connection};