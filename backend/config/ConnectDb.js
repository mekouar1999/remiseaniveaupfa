const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_PAPA, {
    
    });
    console.log('Connected to MongoDB de nada et hajar');
  } catch (error) {
    console.error('Error nadaaaa to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDb;