const express = require("express");
const port = 3000;
const parser = require('body-parser');
const app=express();
const userRouter = require("./routes/userManager.js");
const utilRouter = require("./routes/util.js");
const locationRouter = require("./routes/locationmanager.js");
const ordeRouter = require("./routes/ordermanager.js");
const packageRouter = require("./routes/packageManager");
const cors = require('cors')
const stripe = require("stripe")("sk_test_4ypbMh4aR9gRNnUkQCwgOyCT00rSoAbXzZ"); //test secret key

app.use(cors());
app.use(parser.json());
app.use('/user',userRouter)
app.use('/util',utilRouter)
app.use('/location',locationRouter)
app.use('/order',ordeRouter)
app.use('/package',packageRouter)

app.get('/' ,(req,res)=>{
   res.send("its working")
})

app.post("/create-payment-intent", async (req, res) => {
    const data = req.body;
    console.log(data);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: 'inr'
    });
 
    res.status(200).json(paymentIntent);
    
  });

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})