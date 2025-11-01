import express from 'express'
import cors from 'cors'
import proxy from 'express-http-proxy'

const app=express();


app.use(express.json())
app.use(cors())
app.use('/customer',proxy('http://localhost:5696'))
app.use('/',proxy('http://localhost:5697'))
app.use('/shopping',proxy('http://localhost:5698'))

app.listen(5600,()=>{
    console.log('Getway Service is Running on 5600....')
})
