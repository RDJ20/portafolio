const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Sirve los archivos estáticos de la carpeta build de React
app.use(express.static(path.join(__dirname, 'build')));

// Maneja todas las rutas con React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});