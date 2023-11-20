import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserModel from './Models/Users.js';

const App = express();
App.use(cors());
App.use(express.json());

//mongo connection
mongoose.connect('mongodb://127.0.0.1:27017/crudApp')

App.get("/ping", (req, res) => {
    res.send("pong");
});

App.post("/createUser",(req, res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

App.get("/",(req, res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

App.get("/getUser/:id",(req, res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



App.put("/updateUser/:id",(req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},
        {
            name:req.body.name, 
            email:req.body.email, 
            age:req.body.age
        })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

App.delete("/deleteUser/:id",(req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})




App.listen(3001, () => {
    console.log("Server is running on port 3001");
});
