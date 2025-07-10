require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter',(req,res)=>{
                    res.send("you getting your output")
})

app.get('/login',(req,res)=>{
                    res.send('<h1>please enter your details</h1>')
})

app.get('/utube',(req,res)=>{
                    res.send("<h2>chai and code</h2>");
                    
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})