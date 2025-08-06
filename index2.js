import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
                    res.send('<h1 >Hello World!</h1>');
})

app.get('/twitter',(req,res)=>{
                    res.send('<h2>You are getting your output</h2>');
})

app.get('/login',(req,res)=>{
                    res.send('<center><h1>Login Page</h1></center>');
})
app.listen(port,()=>{
                    console.log(`Example app listening on port ${port}`);
})

