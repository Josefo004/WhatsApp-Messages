import { Router } from 'express';
import { getMensaje, postMensaje } from '../controllers/mensaje.controller';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos';

const router = Router();

router.get('/',  getMensaje);

router.post('/',[
  check('telefono', 'El telefono es OBLIGATORIO').notEmpty(),
  check('telefono', 'El teléfono debe tener una longitud de 12 caracteres ej. +59172893813').isLength({ min: 12, max: 12 }),
  check('telefono')
    .matches(/^\+591\d{7,}$/)
    .withMessage('El teléfono debe comenzar con +591 y contener solo números después'),
  check('mensaje', 'El mensaje es OBLIGATORIO').notEmpty(),
  check('mensaje', 'El mensaje debe tener mas de 10 caracteres y menos de 150').isLength({min:10, max:150}),
  validarCampos
], postMensaje);

export default router;

