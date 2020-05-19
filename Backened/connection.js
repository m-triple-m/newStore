const mongoose=require ('mongoose');
const con_url="mongodb://localhost:27017/USTORE";

mongoose.connect(con_url,{useNewUrlParser:true})
.then(()=>{
    console.log("succesful")
})
.catch((err)=>{
    console.log("Error in connection")
})
module.exports = mongoose