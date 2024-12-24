import mongoose from 'mongoose'

const webRecDSchema = new mongoose.Schema({
    cRec: {
        type: String,
        required: true
    },
    recUType: {
        type: String,
        required: true
    }
},
    { timestamps: true })

const webRecDModel = mongoose.model('webRecDModel', webRecDSchema)
export default webRecDModel