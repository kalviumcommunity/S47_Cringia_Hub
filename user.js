const mongoose = require('mongoose')

// A singleton to ensure we only start the database once
// assign the MongoMemoryServer instance to mongoServer
let mongoServer
const uri =
	'mongodb+srv://devraj326:dev326min@cluster0.h7stzr1.mongodb.net/?retryWrites=true&w=majority'

const startDatabase = async () => {
	// Your code here
	await mongoose.connect(uri)
  console.log('connected to database')
}

const stopDatabase = async () => {
	// Your code here
	mongoose.disconnect(uri)
}

const isConnected = () => {
	return mongoose.connection.readyState === 1
}

module.exports = { startDatabase, stopDatabase, isConnected }
