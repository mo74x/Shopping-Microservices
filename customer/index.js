import express from 'express'

const app=express();

app.use(express.json())
app.use('/',(req,res,next)=>{
    return res.status(200).json({"msg":"This is Customer..."})
})

app.listen(5696,()=>{
    console.log('Customer Service is Running....')
})
