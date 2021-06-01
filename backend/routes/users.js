const router=require('express').Router()
let User=require('../models/user.model')


router.route('/').get((req,res)=>{
   User.find()
   .then(users=>res.json(users))
   .catch(err=>res.status(400).json('Error: '+err))
    
})

router.route('/add').post((req,res)=>{
    const username=req.body.username
    
    const newUser=new User({username})
    //save to mongodb database
    newUser.save()
    .then(()=>res.json('User added'))
    .catch(err=>res.status(400).json('Error: '+err))

})
router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error: '+err))
     
 })

router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json('user deleted'))
    .catch(err=>res.status(400).json('Error: '+err))
     
 })

 
 router.route('/update/:id').post((req,res)=>{
    User.findById(req.params.id)
    .then(exercise=>{
            exercise.username=req.body.username
           
            
            //save to mongodb database
            exercise.save()
            .then(()=>res.json('Exercise updated'))
            .catch(err=>res.status(400).json('Error: '+err))
        })
        .catch(err=>res.status(400).json('Error: '+err))
    })

module.exports=router