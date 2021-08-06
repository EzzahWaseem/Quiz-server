import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    questions:String,
    optiona:String,
    optionb:String,
    optionc:String,
    answer:String,
    createdAt:{
        type:Date,
        default: new Date()
    },
})

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;