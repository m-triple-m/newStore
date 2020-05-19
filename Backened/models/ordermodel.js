const mongoose=require("../connection");
const schema=mongoose.Schema;
// const autoincrement=require('mongoose-auto-increment')
// autoincrement.initialize(mongoose);
const OrderSchema=new schema ({
    user : String,
    location : String,
    name : String,
    first : String,
    last : String,
    phone : String,
    email : String,
    date : Date,
    orderdate : Date,
    reservation: Number,

})
// OrderSchema.plugin(autoincrement.plugin, { model: 'Orders', field: 'Reservation' });
const Order_model = mongoose.model('Orders',OrderSchema);
module.exports = Order_model