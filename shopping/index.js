import express from 'express'

const app=express();

app.use(express.json())
app.use('/',(req,res,next)=>{
    return res.status(200).json({"msg":"This is ..."})
})

app.listen(5698,()=>{
    console.log('Shopping Service is Running....')
})
x