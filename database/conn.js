import mongoose, { Connection } from "mongoose";

const connectMongo = async() => {
    try{
        const{connection} = await mongoose.connect(process.env.DATABASE_URL);

        if(connection.readyState == 1){
            return Promise.resolve(true)
        }
    }
    catch(error){
        return Promise.reject(error)
    }
}

export default connectMongo;