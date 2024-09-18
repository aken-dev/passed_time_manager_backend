import express from "express";
const app = express();
import scheduleRoute from "./routes/schedules";
import connectDB from "./db/connect";
import 'dotenv/config'
app.use(express.json())
const PORT = Number(process.env.SCHEDULE_BACKEND_PORT);

//ルーティング設定
app.use("/api/v1/schedules", scheduleRoute);

//データベースと接続
const start = async () => {
    try {
        if(!process.env.SCHEDULE_MONGO_URL){
            throw new Error('SCHEDULE_MONGO_URLが設定されていません。');
        }
        console.log(process.env.SCHEDULE_MONGO_URL);
        await connectDB(process.env.SCHEDULE_MONGO_URL!);
        app.listen(PORT, () => {console.log("サーバーが起動しました。")});
    } catch(err) {
        console.log(err);
    }
};

start();