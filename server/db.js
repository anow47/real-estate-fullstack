import mongoose from "mongoose";
const demoDB = process.env.DEMO_DB_KEY;

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(demoDB);
        // console.log(`MonogoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;