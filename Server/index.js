const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MemesModel = require('./index')
const UserModel = require('./Models/Users')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())


const { MongoClient } = require('mongodb');
const port = 3000
app.use(cors())

const urii = 'mongodb+srv://devrajpatil:dev326min@cringiadata.pztbmmj.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(urii);
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas Successfully');
    const database = client.db('Meme');
    const collection = database.collection('memeimg');

    app.get('/', async (req,res)=>{
    const result = await collection.find({}).toArray(
        
    );
      res.json(result);
    })
  })
  .catch(err => {
    console.error('An Error while connecting to MongoDB Atlas', err);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const { MongoClient } = require('mongodb');
// const UserModel = require('./Models/Users')

// const app = express()
// app.use(cors())
// app.use(express.json())

// const uri = 'mongodb+srv://devrajpatil:dev326min@cringiadata.pztbmmj.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(uri,{dbName:'Meme'}).then(() => {
//     console.log('Connected to MongoDB Atlas Successfully');
//     // const database = client.db('crud');
//     // const collection = database.collection('users');

//     // app.get('/',  (req,res)=>{
//     // // const result = await collection.find({}).toArray(
//     //     const user = UserModel.find({});
//     //     .then(users => res.json(users))

//     // })

//     app.get('/', (req,res)=>{
//         UserModel.find()
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
//     })

//     // app.get('/getUser/:id', (req,res)=>{
//     //     const id = req.params.id
//     //     UserModel.findById({_id:id})
//     //     .then(users => res.json(users))
//     //     .catch(err => res.json(err))
//     // })


//     // app.put('/updateUser/:id', (req,res)=>{
//     //     const id = req.params.id
//     //     UserModel.findByIdAndUpdate({_id:id}, {name:req.body.name,email:req.body.email,age:req.body.age})
//     //     .then(users => res.json(users))
//     //     .catch(err => res.json(err))
//     // })

//     // app.delete('/deleteUser/:id', (req,res)=>{
//     //     const id = req.params.id
//     //     UserModel.findByIdAndDelete({_id:id})
//     //     .then(res => res.json(res))
//     //     .catch(err => res.json(err))
//     // })

//     // app.post('/insert', (req,res)=>{
//     //     UserModel.create(req.body)
//     //     .then(users => res.json(users))
//     //     .catch(err => res.json(err))
//     // })
    
//     app.listen(3001, () => {
//         console.log('Server started on port 3001')
//     })
//   })
//   .catch(err => {
//     console.error('An Error while connecting to MongoDB Atlas', err);
// });


//******************************************************** */

/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./Models/Users');

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://devrajpatil:dev326min@cringiadata.pztbmmj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { dbName: 'Meme' })
  .then(() => {
    console.log('Connected to MongoDB Atlas Successfully');
    console.log(mongoose.models);

    // Check if the model already exists
    if (mongoose.models.memeimg) {
      console.log('Using existing memeimg model');
    } else {
      // Define the memeimg schema
      const memeimgSchema = new mongoose.Schema({
        // Define your schema here
      });

      // Create the memeimg model
      mongoose.model('memeimg', memeimgSchema);
      console.log('Created memeimg model');
    }

    // Access the 'memeimg' collection using Mongoose
    const MemeImgModel = mongoose.model('memeimg');

    app.get('/', async (req, res) => {
      // Fetch data from the 'memeimg' collection using Mongoose
      const memeImgData = await MemeImgModel.find();
      console.log(memeImgData)

      res.json(memeImgData);
    });

    app.listen(3001, () => {
      console.log('Server started on port 3001');
    });
  })
  .catch(err => {
    console.error('An Error while connecting to MongoDB Atlas', err);
  });
*/

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const UserModel = require('./Models/Users');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const uri = 'mongodb+srv://devrajpatil:dev326min@cringiadata.pztbmmj.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(uri, { dbName: 'crud'})
//   .then(() => {
//     console.log('Connected to MongoDB Atlas Successfully');

//     // Check if the model already exists
//     if (mongoose.models.users) {
//       console.log('Using existing memeimg model');
//     } 
//     // else {
//     //   // Define the memeimg schema
//     //   const memeimgSchema = new mongoose.Schema({
//     //     // Define your schema here
//     //   });

//     //   // Create the memeimg model
//     //   mongoose.model('users', memeimgSchema);
//     //   console.log('Created memeimg model');
//     // }

//     // // Access the 'memeimg' collection using Mongoose
//     // const Users = mongoose.model('users');

//     app.get('/', async (req, res) => {
//       try {
//         // Fetch data from the 'memeimg' collection using Mongoose
//         const userdata = await Users.find();
//         console.log(userdata)
//         res.json(userdata);
//       } catch (error) {
//         console.error('Error while fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
//     });

//     app.listen(3000, () => {
//       console.log('Server started on port 3000');
//     });
//   })
//   .catch(err => {
//     console.error('An Error while connecting to MongoDB Atlas', err);
//   });
























