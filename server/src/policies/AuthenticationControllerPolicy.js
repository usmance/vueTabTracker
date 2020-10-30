const Joi=require('joi')
module.exports={
    register(req,res,next){
        // console.log("")
        const schema=Joi.object({
            email:Joi.string().email(),
            password:Joi.string().regex(
               new RegExp('^[a-zA-Z0-9]{8,32}$') 
            )
        })
       
        const{error,value}=schema.validate(req.body);
        // console.log(error,value)
        if (error){
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error:"You must provide email address"
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error:"The password provided failed to match the policy"
                    })
                    break;
                default:
                    res.status(400).send({
                        error:"Invalid registration information"
                    })
                    break;
            }
        }
        else
        {
            next()
        }
        
    }
}