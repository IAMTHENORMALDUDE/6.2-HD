const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://farid:farid1234@cluster0.iiqckff.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connectDatabase() {
    await client.connect();
    console.log("Connected to MongoDB successfully");
    return client.db("sit725"); 
}

module.exports = connectDatabase;
