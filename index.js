import express from "express";

const app = express();

const PORT = 3000;
app.listen(PORT , () =>{console.log(`Server stated at PORT : ${PORT}`)});

app.get('/', (req,res) =>{
    res.send("Welcome to HomePage!")
});