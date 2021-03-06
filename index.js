const express =require('express');
const bodyParser =require('body-parser');
const app=express();
const authRoutes= require('./routes/auth');
const errorController= require('./controllers/error');

const ports =process.env.PORT || 3000;
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','Get, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});

app.use('/auth', authRoutes);
app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports,() =>console.log(`listening on port ${ports}`))