const express=require('express');
const expressLayout=require('express-ejs-layouts');

const connectDb=require('./config/db');
const dashRoutes=require('./routes/dashboard');
const dotEnv=require('dotenv');
const blogRoutes=require('./routes/blog');
const path=require('path');

const app=express();

//* Load Config
dotEnv.config({path:"./config/config.env"});

//* DataBase Connection
connectDb();

//* View Engine
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/mainLayout");
app.set("views", "views");


//* Static Folder
app.use(express.static(path.join(__dirname,"public")));


//* Routes
app.use("/dashboard",dashRoutes);
app.use(blogRoutes);

const port=process.env.PORT || 3000;

app.listen(port,()=>console.log(`server is running ${port}`));
