const User = require('../models/users'); 
const db = require('../db/dbconnection')();

async function getUsers(req, res) {
    const collection = await db.collection('users');
    const data = await collection.find({}).toArray();
    res.json({ statusCode: 200, data, message: "Success" });
}

async function addUser(req, res) {
    const newUser = new User(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
    await db.collection('users').insertOne(newUser);
    res.json({statusCode: 200, message:"User added successfully"});
}

module.exports = { getUsers, addUser };
