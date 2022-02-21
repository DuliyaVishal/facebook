const app=require("./index");
const connect=require("./config/db");
 app.listen(2200,async()=>{
     try{
         await connect();
        console.log("listen to port 2200");

     }
     catch{
         console.log(err.massage)
     }
     
 })