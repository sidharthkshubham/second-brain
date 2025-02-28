const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const userRouter = require('./routes/user');
const app = express();
app.use(express.json())

app.use('/api/v1/user',userRouter)


async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("server started on the 3000 ")
    console.log("http://localhost:3000/")
}

main()