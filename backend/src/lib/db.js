import mongoose from "mongoose";

import {ENV} from "./env.js";

export const connectDB = async () => {
    try{
        if (!ENV.DB_URL) {
            throw new Error("DB_UPL is not defined in env variables")
        }
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log("Connected to Mongodb:", conn.connection.host)
    } catch(error){
        console.log("Error connectinf DB",error);
        process.exit(1);
    }
};
