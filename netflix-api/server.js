const express=require("express");
const cors=require('cors');
const mongoose=require("mongoose");
const userRouter=require('./routes/UserRoutes')
const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://0.0.0.0:27017/netflix')
.then(() => {
    console.log("MongoDB connected successfully");
    // Start the server after successful MongoDB connection
    app.listen(5000, () => {
        console.log("Server started at port 5000");
    });
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.use("/api/user", userRouter)