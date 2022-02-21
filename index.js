const express=require("express");
const userController=require("./models/users.model")
const postLikeController=require("./models/post.like.model")
const postController=require("./models/post.model")
const app=express();
app.use(express.json());
app.use("/users",usersController);
app.use("/users",postLikeController);
app.use("/users",postController);

module.exports=app;