const express = require("express");
const router= express.Router();
const models = require('../models/locationmodel')
const multer = require('multer');

router.get('/',(req,res)=>{
    res.send("Router Working...")
})

router.post('/add',(req,res)=>{
    console.log(req.body);
    data = req.body;
    location_model= new models(data)
    location_model.save()
    .then((data)=>{
        console.log(data)
        res.status(200).json({message:"Success"})
    }) 
    .catch((err)=>{
        res.status(500).json(err)
    })
})

router.put('/update/:id',(req,res)=>{
    console.log(req.body);
    data = req.body;
    models.findByIdAndUpdate(req.params.id, data)
    .then((data)=>{
        console.log(data)
        res.status(200).json({message:"Success"})
    }) 
    .catch((err)=>{
        res.status(500).json(err)
    })
})

router.get('/all',(req,res)=>{
    models.find({})
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })

})

router.get('/getByCity/:city',(req,res)=>{
    var user=req.params.city;
    models.find({city:user})
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})
module.exports= router