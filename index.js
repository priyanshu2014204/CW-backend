const express=require("express");
const app=express();
const {connection}=require("./config/db.js");
const {Flightsche}=require("./model/flight.js");
const cors=require("cors")
app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.get("/",async(req,res)=>{
    const data=await Flightsche.find();
    // let a=req.body
    // console.log(a)
    res.send(data)
})

app.post("/updating",async(req,res)=>{
    const {takeof,landing,airline,cost}=req.body;
    await Flightsche.insertMany({takeof,landing,airline,cost})
    // console.log(takeof,landing,cost,airline)
    res.send("Hello.")
})

app.listen(8080,async()=>{
    connection
    try{console.log("connecting to the right port")}
    catch(err){}
})