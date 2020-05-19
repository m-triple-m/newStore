const mongoose=require("../connection");
const schema=mongoose.Schema;
const UserSchema=new schema ({
    state:String,
    city:String,
    address:String,
    pincode:Number,
    area:Number,
    price:Number,
    locality:String

})
const location_model = mongoose.model('location',UserSchema);
module.exports = location_model