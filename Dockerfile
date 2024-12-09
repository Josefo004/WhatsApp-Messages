# version de
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Actualizar Imagen
RUN apt-get update

# Instalamos Dependencias
RUN apt-get install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que el servidor está escuchando
EXPOSE 4001

# Ejecuta el comando para iniciar la aplicación
CMD ["npm", "start"]
