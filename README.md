Prototipo desarrollado en **NodeJs 18v** basado en el proyecto [WhatsApp Messages](https://github.com/JoseLizardo21/WhatsApp-Messages) de José Lizardo, se mantuvo el codigo original, en el presente trabajo solo solo adiciono TypeScript al proyecto.

## Uso
Para levantar el servicio basta con ejcutar:
```
npm install
```
```
npm run build
```
```
npm start
```

## Modo Desarrollo
Para usarla en modo de desarrollo basta con ejecutar dentro la carpeta raíz el siguiente comando.

```
npm install
```
Y luego en dos instancias diferentes de **CLI** ejecutar

```
./node_modules/typescript/bin/tsc --watch
```
```
./node_modules/nodemon/bin/nodemon.js ./dist/app.js
```
## Prueba del servicio
El puerto a usarse esta especificado en las variables de entorno `.ENV`, se debe hacer una solicitud **POST** al siguiente endpoint
```
http://localhost:4001/api/v0/mensaje
```
El BODY del POST debe tener esta estructura
```
{
    "telefono":"+59172893813",
    "mensaje":"NODEJS"
}
```
## Docker
Para levantar el servicio con docker bastara hacer modificar las configuraciones como puertos y disparadores de `Dockerfile` y `docker-compose.yml` luego ejecutar
```
docker compose build
docker compose up
```

## README (original)
**NOTE:** En caso de tener errores con la generaciòn del codigo qr e inicio de sesiòn con whatsapp web js prueba en cambiar las lineas de còdigo mencionadas en el video con las siguientes:

const INTRO_IMG_SELECTOR = 'div[role=\'textbox\']'; //'[data-icon=\'chat\']';
const INTRO_QRCODE_SELECTOR = 'div[data-ref] canvas';
