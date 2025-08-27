import express from "express";
import cors from "cors";
const app = express();

const port = 8000;

app.use(cors())

app.get("/api",(req,res)=>{
    res.status(200).json({name:"hassan"})
})


app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})