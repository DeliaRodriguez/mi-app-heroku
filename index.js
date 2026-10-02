const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mi primera aplicación en Heroku</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f3f4f6;
          color: #1f2937;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .card {
          background: white;
          width: min(90%, 650px);
          padding: 40px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
          text-align: center;
        }
        h1 { margin-bottom: 10px; }
        p { line-height: 1.6; }
        .badge {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 16px;
          border-radius: 999px;
          background: #e5e7eb;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <main class="card">
        <h1>¡Aplicación desplegada correctamente!</h1>
        <p>
          Este es un proyecto sencillo desarrollado con Node.js y Express
          para demostrar el proceso de despliegue desde GitHub hacia Heroku.
        </p>
        <span class="badge">Deployment con Heroku</span>
      </main>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Aplicación ejecutándose en el puerto ${PORT}`);
});
