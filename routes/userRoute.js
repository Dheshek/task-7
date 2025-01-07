import express from 'express';
import { fetch,create,update,deleteUser} from '../controller/userController.js';
const router = express.Router();
router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);
router.delete('/delete',deleteUser);
export default router;