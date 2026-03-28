const express = require('express');
const app= express();

app.use(express.json());

let users = [];

app.post('/users', (req,res) =>{
    const newUsers = req.body;
    users.push(newUsers);
    res.status(201).json(newUsers);
})

app.get('/users', (req,res) =>{
    res.status(200).json(users)
})

app.patch('/users/:id', (req,res) => {
    const id= req.params.id;
    
    if(id >=0 && id< users.length){
        users[id] = req.body;
        res.status(200).json(users[id]);
    }else{res.status(400).send("User not found!")}
}) 


app.delete('/users/:id', (req,res) => {
    const id = parseInt(req.params.id);
    
    users = users.filter((_,index) => index != id);

    res.status(200).json({
        users: users, 
        message:'User deleted!'})
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})