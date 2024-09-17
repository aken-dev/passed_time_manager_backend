import express from "express";
const app = express();
import scheduleRoute from "./routes/schedules";
import connectDB from "./db/connect";
import 'dotenv/config'
app.use(express.json())
app.use(express.static("./public"));
const PORT = 4000;

//ルーティング設定
app.use("/api/v1/schedules", scheduleRoute);
// app.options('http://localhost:8080', (req, res) => {
//     console.log('なんかリクエストきた');
//         console.log(req.params);
//         // res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
//         // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
//         // res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, X-PINGOTHER, Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization');
//         if (req.method === 'OPTIONS'){
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
//         res.send(204);
//         }
//   });
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