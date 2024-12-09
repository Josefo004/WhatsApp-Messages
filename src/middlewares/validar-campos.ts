import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

// Middleware para validar campos
export const validarCampos = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return; // Agrega `return` explícito para evitar seguir a `next()`
  }
  next();
};
