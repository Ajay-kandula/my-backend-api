const mongoose=require('mongoose');

const Message=new mongoose.Schema({
    name:{
        type:String,
        allowNull:false,
    },
    email:{
        type:String,
        allowNull:false
    },
    message:{
        type:String,
        allowNull:false

    }
})
module.exports=mongoose.model('Message',Message)