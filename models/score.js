import mongoose from 'mongoose'

const scoreSchema = mongoose.Schema({
    name:String,
    score:String,
    createdAt:{
        type:Date,
        default: new Date()
    },
})

const Score = mongoose.model('Score',scoreSchema);

export default Score;