const mongoose = require('mongoose')

let mongoServer
const uri =
	'mongodb+srv://devraj326:dev326min@cluster0.h7stzr1.mongodb.net/?retryWrites=true&w=majority'

const startDatabase = async () => {

	await mongoose.connect(uri)
  console.log('connected to database')
}

const stopDatabase = async () => {

	mongoose.disconnect(uri)
}

const isConnected = () => {
	return mongoose.connection.readyState === 1
}

module.exports = { startDatabase, stopDatabase, isConnected }
