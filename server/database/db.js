
import mongoose from 'mongoose';
const Dbconnection=async()=>{
    const MONGODB_URL=`mongodb+srv://chetri555:n8z6khkhfy@file-sharing.27lrjzs.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('error while connecting with the database',error.message);
    }
}
export  default Dbconnection;