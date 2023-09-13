import express from 'express';
import router from './routes/route.js';
import cors from 'cors';
import Dbconnection from './database/db.js';
const app=express();

app.use(cors());

app.use('/',router);

const port=8000;


Dbconnection();
app.listen(port,()=>{
    console.log(`server is running`);
    
})