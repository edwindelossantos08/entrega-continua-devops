// Servidor web "Hola Mundo" con Node.js puro (sin dependencias externas).
// Práctica de DevOps: app → Dockerfile → imagen → Docker Hub.

const http = require("http");

// Puerto configurable por variable de entorno (útil dentro del contenedor)
const PORT = process.env.PORT || 3000;

// Crea el servidor HTTP que responde con una página simple de bienvenida
const server = http.createServer((req, res) => {
  // Responde siempre 200 con HTML en UTF-8
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
      <head><meta charset="utf-8"><title>Hola Mundo</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 15vh;">
        <h1>¡Hola Mundo! 🌎</h1>
        <p>App web de práctica DevOps — Node.js + Docker</p>
      </body>
    </html>
  `);
});

// Inicia el servidor escuchando en todas las interfaces (necesario en Docker)
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
