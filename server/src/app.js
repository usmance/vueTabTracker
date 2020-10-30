const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const {sequelize}=require('./models')

const config =require('./config/config.js')
const app=express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

require('./routes')(app)



sequelize.sync({force:true})
.then(()=>{

    app.listen(process.env.port || 8081);
    console.log(`Server started on port ${config.port}`)
}
    
    )
