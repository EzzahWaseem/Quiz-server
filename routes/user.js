import express from 'express'
import {createUser,getUser,getUsersList} from '../controllers/user.js'
const userRouter = express.Router()

userRouter.get('/get-list', getUsersList);
userRouter.post('/get-user', getUser);
userRouter.post('/create-user', createUser);


export default userRouter