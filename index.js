const express =require('express')

const app=express()
app.use(express.json())
let data=[]

app.get('/',(req,res)=>{
    res.send(data)
})



app.post('/register',(req,res)=>{
    console.log(req.body)
    // res.send(req.body.name)
    const {first_name} = req.body
    const {last_name}=req.body
    const {email}=req.body
    const {age}=req.body
    const {pincode}=req.body

    if(!first_name){
        return res.send("Please Enter first Name correctly")
    }else if(!last_name){
        return res.send("Please Enter last Name correctly")
    }else if(!email.includes("@")){
        return res.send("Please Enter Email correctly")
    }else if(age <= 20){
        return res.send("Age Should be more than 20")
    }else{
       data.push(req.body)
       res.send("User registered Successfully")
    }
})
console.log(data)
app.listen(3001)