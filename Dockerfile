# Imagen base ligera de Node.js (Alpine reduce el tamaño final)
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY package.json server.js ./

# Puerto que expone la aplicación
EXPOSE 3000

# Comando que arranca el servidor al iniciar el contenedor
CMD ["node", "server.js"]
