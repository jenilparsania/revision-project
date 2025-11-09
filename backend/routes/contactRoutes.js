const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json({message : "Get all the contacts"});
});
router.route("/").post((req,res)=>{
    res.status(200).json({message : "Create"});
});
router.route("/:id").get((req,res)=>{
    res.status(200).json({message : `Get the contact ${req.params.id}`});
});
router.route("/:id").put((req,res)=>{
    res.status(200).json({message : `Update ${req.params.id}`});
});
router.route("/:id").delete((req,res)=>{
    res.status(200).json({message : `Delete contact fpr ${req.params.id}`});
});


module.exports = router
