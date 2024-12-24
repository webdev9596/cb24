import mongoose from "mongoose"

const connectDb = async () => {
    await mongoose.connect(process.env.DB_URL)
}

export default connectDb