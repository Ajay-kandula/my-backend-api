const {DataTypes} =require('sequelize')
const sequelize=require('../Config/db')
const Message=sequelize.define('Message',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    message:{
        type:DataTypes.STRING,
        allowNull:false

    }
})
module.exports=Message;