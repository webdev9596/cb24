import mongoose from 'mongoose'

const webUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

const webUsModel = mongoose.model("webUsModel", webUsSchema);

export default webUsModel