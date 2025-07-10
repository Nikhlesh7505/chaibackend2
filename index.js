require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubdata={
                    "userId": "64b9e12b58d9f4a6e0c77a01",
    "amount": 1000,
    "transactionType": "withdraw",
    "paymentMode": "UPI",
    "transactionId": "TXN98765UPI",
    "remarks": "Emergency withdrawal",
    "date": "2025-07-07T18:05:00Z"
}


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


app.get('/github',(req,res)=>{
                    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})