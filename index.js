const express= require('express')
let cors = require("cors");

const app =express()
const port = process.env.port || 5000

// ^middleware

app.use(cors());
app.use(express.json());

const users = [
    {id:1,name:"shabana",email:"shabana@gmail.com"},
    {id:2,name:"shabnur",email:"shabnur@gmail.com"},
    {id:3,name:"sabila",email:"sabila@gmail.com"},

]

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

  app.get('/users',(req,res)=>{
    res.send(users)
  })

  app.post('/users',(req,res)=>{
    console.log('post api hitting')
    const newUser = req.body
    newUser.id= users.length + 1;
    users.push(newUser)
    // console.log(newUser)
    res.send(newUser)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
