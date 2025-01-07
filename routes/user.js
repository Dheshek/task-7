const express = require('express');
let router = express.Router();
router.get("/" , (req,res)=>{
    res.send("User Information");
})
router.get("/newuser" , (req,res)=>{
    res.send("New User Added");
})
router.get("/createuser" , (req,res)=>{
    res.send("Add New User Added");
})
router
.route('/:id')
.get((req,res)=>{
    console.log(req.usery);
    res.send("Retrive the id value " + req.params.id)
})
.put((req,res)=>{   
    res.send("Update the id value " + req.params.id)
})
.delete((req,res)=>{
    res.send("Delete the id value " + req.params.id)
})

const users = [{name:"raja"},{name:"Rani"},{name:"sepoy"}];
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery = users[id];
    next();
})
/* router.get('/:id',(req,res)=>{
    res.send("Retrive the id value " + req.params.id)
})
router.put('/:id',(req,res)=>{
    res.send("Update the id value " + req.params.id)
})
router.delete('/:id',(req,res)=>{
    res.send("Delete the id value " + req.params.id)
}) */
module.exports = router;