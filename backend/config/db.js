import mongoose from "mongoose"

const connectDb = async () => {
  try {
    const uri = process.env.DB_URL || `mongodb+srv://rootuser:${process.env.DB_USER}.bmncaci.mongodb.net/${process.env.DB_NAME}`;
    
    if (!uri) {
      throw new Error('MONGO_URI is not defined');
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDb
