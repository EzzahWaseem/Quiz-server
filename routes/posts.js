import express from 'express'
import {getList,createList,updateList,deleteList,getScores,createScores} from '../controllers/posts.js'

const router = express.Router()

router.get('/', getList);
router.post('/', createList);
router.patch('/:id', updateList);
router.delete('/:id', deleteList);
router.get('/get-score', getScores);
router.post('/post-score', createScores);

export default router