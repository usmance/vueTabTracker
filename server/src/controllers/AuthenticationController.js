const {User,bcrypt} =require('../models/User')
const jwt=require('jsonwebtoken')
const config=require('../config/config')

function jwtSignUser(user) {
    const ONE_WEEK=60*60*24*7;
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn:ONE_WEEK
    })
}

module.exports={
    async register (req,res){
        // console.log(req.body)
        try {
            
            const user=await User.create(req.body)
            // console.log("user")
            res.send(user.toJSON())
        } 
        catch (error) {
            console.log("Cannot create user")
            console.log(error)
            res.send("Cannot create user")
        }
        // const user=await User.create(req.body)
    },
    async login (req,res){
        try {
            // console.log("Req Here")
            const {email,password}=req.body
            const user=await User.findOne({
                where:{
                    email:email
                }
            })
            if(!user){
               return res.status(403).send({
                    error:"User not found "
                })
            }
            console.log(password,user.password)
            
            const isPasswordValid = bcrypt.compareSync(password,user.password)
           
            console.log(isPasswordValid)
            if(!isPasswordValid){
                return res.status(403).send({
                    error:"Wrong password "
                })
            }
            console.log("user logged in")
            const userJson=user.toJSON()
            res.send({
                user:userJson,
                token:jwtSignUser(userJson)
            })
        } 
        catch (error) {
            res.status(403).send({
                error:"Invalid login info encountered an error"
            })
    
        }
        // const user=await User.create(req.body)
    }
}