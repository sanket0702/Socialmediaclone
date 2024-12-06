const express =require("express");
const cors =require("cors");

const app =express();

/*const allowed=["http://localhost:5000","http://localhost:3000/"];
const options=(req,res)=>{
    let tmp;
    let origin =req.header("origin");
    if(allowed.indexOf(origin)>-1)
    {
        tmp={
            origin:true,
            optionSuccessStatus:200,

        };

    }
    else{
        tmp={
            origin:false,
            
        };
    }
    re(null,tmp);
}*/
//this is access control origin MiddleWare
/*const options={
    origin:'http://localhost:3000/',
    useSuccessStatus:200,  // reason beheind using 200 beccase some old browsers have problems
    
}*/

app.use(cors());


app.get('/',(req,res)=>{
    res.send("Welcome from home ");
});
app.listen(5000,()=>{
    console.log("server is running good.....");
});