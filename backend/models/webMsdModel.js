import mongoose from 'mongoose'

const webMSDSchema = new mongoose.Schema({
    rmsDesc: {
        type: String,
    },
    fmsDesc: {
        type: String,
    },
    MSType: {
        type: String,
        required: true
    },
    postingDt: {
        type: Date,
        required: true
    },
},
    { timestamps: true })

const webMSDModel = mongoose.model('webMSDModel', webMSDSchema)
export default webMSDModel