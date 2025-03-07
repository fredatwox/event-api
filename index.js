import express from "express";
import mongoose from "mongoose";
import eventRouter from "./routes/event.js";
import 'dotenv/config'




//Make database connection
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('Database connected'))
.catch(err => console.log(err));

// create an express app
const app = express();

//middleware
app.use(express.json());


//use route
app.use(eventRouter);

//Listen for incoming request
app.listen(3200, () => {
    console.log("server is listening on port 3200");
});