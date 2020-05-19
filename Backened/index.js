const express = require("express");
const port = 3000;
const parser = require('body-parser');
const app=express();
const userRouter = require("./routes/userManager.js");
const utilRouter = require("./routes/util.js");
const locationRouter = require("./routes/locationmanager.js");
const ordeRouter = require("./routes/ordermanager.js");
const cors = require('cors')
app.use(cors());
app.use(parser.json());
app.use('/user',userRouter)
app.use('/util',utilRouter)
app.use('/location',locationRouter)
app.use('/order',ordeRouter)

app.get('/' ,(req,res)=>{
   res.send("its working")
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})