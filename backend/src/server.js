import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app =express();

console.log(process.env.PORT)
app.get("/", (req,res)=>{
    res.status(200).json({msg: "success from backend "})
});

app.listen(3000, ()=> console.log("Server is running on port 3000"));
   