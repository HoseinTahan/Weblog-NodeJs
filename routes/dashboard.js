const {Router}=require('express');


const router=Router();

router.get("/login",(req,res)=>{

res.render("login",{pageTitle:"ورود به بخش مدیریت",path:"/login"});

});

module.exports=router;