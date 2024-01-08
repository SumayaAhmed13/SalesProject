const mongoose= require('mongoose');

const DataSchema=mongoose.Schema({
    productName:{type:String,required:true},
    price:{type:Number,required:true},
    qty:{type:Number,required:true},
    date:{type:Date}
},{
    timestamps:true,versionKey:false
})

const SalesModel=mongoose.model('salesproducts',DataSchema);
module.exports=SalesModel