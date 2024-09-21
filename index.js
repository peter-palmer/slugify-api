const express = require("express");
const slugify = require("slugify");
const dotenv = require("dotenv");

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint para convertir una cadena en un slug
app.post("/slugify", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Se requiere un campo "text"' });
  }

  // Convertir el texto en un slug
  const slug = slugify(text, {
    lower: true, // Convertir a minúsculas
    strict: true, // Eliminar caracteres no permitidos
    trim: true, // Quitar espacios en los extremos
  });

  // Enviar la respuesta con el slug
  res.json({ slug });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
