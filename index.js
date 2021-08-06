import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()


app.use(bodyParser.json({
    limit:"30mb",
    extended:true,
}));

app.use(bodyParser.urlencoded({
    limit:"30mb",
    extended:true,
}));

app.use(cors());
app.use('/posts',postRoutes)
app.use('/user',userRoutes)
app.get('/',(req,res)=>{
    res.send('Hello to Quiz API')
});

const CONNECTION_URL = "mongodb+srv://ezzahwaseem:UVO4uhA7nAl2gIrt@cluster0.5z10b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,'0.0.0.0',()=>console.log(`Server is up on ${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);