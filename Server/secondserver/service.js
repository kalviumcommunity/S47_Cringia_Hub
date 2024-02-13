// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const MemesModel = require('../index')
// const UserModel = require('../Models/Users')
// const Valideter = require('../secondserver/userValidate')
// require('dotenv').config()

// const app = express()
// app.use(cors())
// app.use(express.json())


// const uri = 'mongodb+srv://devrajpatil:dev326min@cringiadata.pztbmmj.mongodb.net/crud?retryWrites=true&w=majority';
// mongoose.connect(uri)
// .then(()=>{
//   console.log('Connected to MongoDB Atlas');

//   app.get('/',(req,res)=>{
//     UserModel.find({})
//     .then(users=>res.json(users))
//   })

//   app.post('/users', (req,res)=>{
//     if (!Valideter(req.body)){
//       return res.status(400).json({
//         error: 'Invalid data'
//       })
//     }
//     UserModel.create(req.body)
//     .then(meme=>res.json(meme))
//   })

//   app.delete('/deleteUser/:id', (req,res)=>{
//     const id = req.params.id
//     UserModel.findByIdAndDelete(id)
//     .then(res => res.json(res))
//     .catch(err => res.json(err))
// })

// app.put('/updateUser/:id', (req,res)=>{
//   const id = req.params.id
//   UserModel.findByIdAndUpdate({_id:id}, {name:req.body.name,email:req.body.email,comments:req.body.comments})
//   .then(users => res.json(users))
//   .catch(err => res.json(err))
// })


// })

// app.listen(4000,()=>{
//   console.log('Server running at http://localhost:4000');
// })

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MemesModel = require('../index')
const UserModel = require('../Models/Users')
// const Valideter = require('../secondserver/userValidate')
const Joi = require('joi');


require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  comments: Joi.string().required()
})

const uri = 'mongodb+srv://devrajpatil:dev326min@cringiadata.pztbmmj.mongodb.net/crud?retryWrites=true&w=majority';
mongoose.connect(uri)
.then(()=>{
  console.log('Connected to MongoDB Atlas');

  app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
  })

  app.post('/update', (req,res)=>{
    const{error,value}=schema.validate(req.body);

    if(error){
      console.log(error.details)
      return res.status(400).json({error:error.details[0].message})
    }else{
      let{name,email,comments}=req.body
      UserModel.create({name,email,comments})
      .then(meme=>res.json(meme))
      .catch(err=>res.status(400).json({error:err}))
    }
  })

  app.delete('/deleteUser/:id', (req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete(id)
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req,res)=>{
  const id = req.params.id
  UserModel.findByIdAndUpdate({_id:id}, {name:req.body.name,email:req.body.email,comments:req.body.comments})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


app.get('/users', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});


})

app.listen(4000,()=>{
  console.log('Server running at http://localhost:4000');
})
