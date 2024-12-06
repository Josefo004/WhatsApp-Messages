
import express, { Application } from 'express';
import mensajeRoutes from '../routes/mensaje.routes';
import cors from 'cors';
import whatsapp from '../helpers/whatsapp';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    mensajes: '/api/v0/mensaje'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8001';

    // Middlewares
    this.middlewares();

    // Definiendo rutas
    this.routes();
  }

  middlewares(){
    //CORS
    this.app.use(cors());

    //Lectura de Body
    this.app.use(express.json());

    //contenido estatico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.mensajes, mensajeRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor Corriendo en Puerto ' + this.port);
      whatsapp.initialize();
    });
  }
}

export default Server;