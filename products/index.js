import express from 'express'

const app=express();

app.use(express.json())
app.use('/',(req,res,next)=>{
    return res.status(200).json({"msg":"This is Products..."})
})

app.listen(5697,()=>{
    console.log('Products Service is Running....')
})