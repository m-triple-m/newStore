const express = require("express");
const router= express.Router();
const models = require('../models/usermodel')
const multer = require('multer');

router.get('/',(req,res)=>{
    res.send("Router Working...")
})

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});
const upload= multer({storage:storage})
router.post('/addimg',upload.single('avatar'),(req,res)=>{
    res.json({message:"file upload success"})
})

router.get('/getImg/:name',(req,res)=>{
    const imgpath = path.join(_dirname,'../../uploads',req.params.name);
    console.log(imgpath);
    res.sendFile(imgpath);
})

router.post('/add',(req,res)=>{
    console.log(req.body);
    data = req.body;
    usermodel= new models(data)
    usermodel.save()
    .then((data)=>{
        console.log(data)
        res.status(200).json({message:"Success"})
    }) 
    .catch((err)=>{
        res.status(500).json(err)
    })

})

router.get('/getall',(req,res)=>{
    models.find({})
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })

})

router.get('/getbyid/:id',(req,res)=>{
    var id =req.params.id;
    models.findById(id)
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})

router.get('/getbyusername/:username',(req,res)=>{
    var user=req.params.username;
    models.findOne({username:user})
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).send(err.message)
    })
})




module.exports = router;

