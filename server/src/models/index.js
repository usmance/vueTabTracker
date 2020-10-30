const fs=require('fs')
const path=require('path')
const {Sequelize, Model, DataTypes} =require('sequelize')
const config=require('../config/config')
const db={}
//Testing connection
const sequelize=new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
);

//Authenticating connection with DB
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Importing models
fs.readdirSync(__dirname)
.filter((file)=>{
    file !=='index.js'
    console.log(file.toString())
})
.forEach((file)=>{
    console.log(file)
    const model= sequelize.import(path.join(__dirname,file))
    db[model.name] =model;
    
})

db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.DataTypes=DataTypes;
module.exports=db