import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    reEnterpassword:String,
    isAdmin:String,
    isUser:String,
    createdAt:{
        type:Date,
        default: new Date()
    },
})

const User = mongoose.model('User',userSchema);

export default User;