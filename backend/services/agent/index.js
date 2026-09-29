import express from 'express'
import dotenv from "dotenv"
import connectDb from './config/db.js'


dotenv.config()

const port = process.env.PORT 

const app = express()
app.use(express.json()) //middleware to connect backend with frontend for authcontroller

app.get("/", (req, res)=>{
    res.json({message: "hello from agent"})
})

app.listen(port, ()=> {
    console.log(`agent started at ${port}`)
    connectDb()
})

 