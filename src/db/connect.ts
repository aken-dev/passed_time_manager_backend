import mongoose from "mongoose";

const connectDB = (url: string) => {
    return mongoose
        .set('strictQuery', true)
        .connect(url)
        .then(() => console.log("データベースと接続成功。"))
        .catch((err: Error) => console.log(err));
};

export = connectDB;