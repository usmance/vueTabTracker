const AuthenticationController=require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicies=require('./policies/AuthenticationControllerPolicy.js')
module.exports=(app)=>{
    app.post('/register',AuthenticationControllerPolicies.register,AuthenticationController.register)

    app.post('/login',AuthenticationController.login)
}