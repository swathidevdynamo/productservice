const mongoose = require('mongoose');


const connectDB = async () => {
    try{
     await mongoose.connect('mongodb://localhost:27017/microservices');
     console.log('Mongodb connected....');
    }catch(error){
      console.error('Database connection failed:', error);
      process.exit(1);
    }
};

module.exports = connectDB;