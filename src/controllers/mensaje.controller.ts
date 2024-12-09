import { Request, Response } from 'express';
import whatsapp from '../helpers/whatsapp';


export const getMensaje = (req:Request, res:Response) => {
  res.json({
    msg: 'get MENSAJE'
  });
}

export const postMensaje = async(req:Request, res:Response) => {
  const { body } = req;
  const tel = body.telefono;
  const men = body.mensaje;
  // console.log(tel, men);
  const chatId = tel.substring(1) + "@c.us";
  console.log(tel, men, chatId);
  const number_details = await whatsapp.getNumberId(chatId);
  if (number_details) {
    await whatsapp.sendMessage(chatId, men);
    res.status(200).json({
      res: " mensaje enviado a "+tel+" Desde NODEJS",
      men
    });
  }
  else{
    res.status(403).json({
      res: " ERROR!! mensaje NO enviado a "+tel,
    })
  }

}
