import { Router } from 'express';
import { getMensaje, postMensaje } from '../controllers/mensaje.controller';


const router = Router();

router.get('/',  getMensaje);
router.post('/', postMensaje);

export default router;