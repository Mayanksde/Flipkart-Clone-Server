import mongoose from "mongoose";

export const Connection = async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.xisaiyk.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connect successfully !!!");
    }
    catch(error){
        console.log("DB connection error",error.message);
    }
}

export default Connection;

