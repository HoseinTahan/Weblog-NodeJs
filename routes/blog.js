const {Router}=require('express');
const router= Router();

//* @desc Weblog IndexPage
//* @route Get 
router.get("/",(req,res)=>{

res.render("index",{pageTitle:"وبلاگ",path:"/"});

});


module.exports=router;