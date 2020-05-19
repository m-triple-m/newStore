const mongoose=require("../connection");
const schema=mongoose.Schema;
const UserSchema=new schema ({
    username:String,
    password:String,
    name:String,
    email:String,
    mobile:Number,
    address:String,
    pincode:Number,
    city:String,
    state:String,
    admin:Boolean,
    created:Date
})

const usermodel = mongoose.model('users',UserSchema);

module.exports= usermodel
