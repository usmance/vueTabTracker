// const { sequelize } = require('./index')
const Promise=require('bluebird')
const { func } = require('joi')
// const bcrypt=('bcrypt')
var db=require('./index')
const bcrypt=require('bcrypt')

const User=db.sequelize.define('User',{
    email:{
        type: db.DataTypes.TEXT,
        unique:true
    },
    password: db.DataTypes.STRING
})


User.addHook('beforeCreate',(user,options)=>{
    // const hashedPassword = bcrypt.hashSync(user.password,10)
    // // console.log(hashedPassword)
    // user.password=hashedPassword
})
User.addHook('beforeSave',(user,options)=>{
    const hashedPassword = bcrypt.hashSync(user.password,10)
    // console.log(hashedPassword)
    user.password=hashedPassword
})







// User.prototype.comparePassword=(password)=>{
//     console.log("Checking")
//     return bcrypt.compare(password,)
// }
module.exports={
    User:User,
    bcrypt:bcrypt
}