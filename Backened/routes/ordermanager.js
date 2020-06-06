const express = require("express");
const router= express.Router();
const models = require('../models/ordermodel.js')


router.get('/',(req,res)=>{
    res.send("Router Working...")
})

router.post('/add',(req,res)=>{
    console.log(req.body);
    data = req.body;
    Order_model= new models(data)
    Order_model.save()
    .then((data)=>{
        console.log(data)
        res.status(200).json(data)
    }) 
    .catch((err)=>{
        res.status(500).json(err)
    })
})
router.get('/getall',(req,res)=>{
    models.find({})
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

router.get('/getbyuser/:id',(req,res)=>{
    models.find({user : req.params.id})
    .populate('location')
    .populate('user')
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
})

router.get('/getnum', (req, res) => {
    models.find({})
    .then(data => {
        res.status(200).json(data.length);
    })
    .catch(err => {
        console.err(err);
        res.status(500).send(err)
    })
})
module.exports=router
