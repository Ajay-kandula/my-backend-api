const {Sequelize} = require('sequelize');
const sequelize= new Sequelize('contact_db','root','Kajay@9999',{
    host:"localhost",
    dialect:'mysql'

});
module.exports=sequelize;