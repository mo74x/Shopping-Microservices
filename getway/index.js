import express from 'express'
import cors from 'cors'
import proxy from 'express-http-proxy'

const app=express();


app.use(express.json())
app.use(cors())
app.use('/customer',proxy('http://127.0.0.1:5696'))
app.use('/shopping',proxy('http://127.0.0.1:5698'))
app.use('/',proxy('http://127.0.0.1:5699'))

app.listen(5600, '0.0.0.0', ()=>{
    console.log('Gateway Service is Running on port 5600....')
})
