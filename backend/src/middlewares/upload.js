import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configuración del almacenamiento
const storage = multer.diskStorage({
    
  destination: (req, file, cb) => {
    const dir = './uploads/'; // carpeta donde se guardan las imágenes
    // creo carpeta uploads si no existe
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Crea la carpeta si no existe
    }

    cb(null, dir); // carpeta donde se guarda
  },

  filename: (req, file, cb) => {
    // const ext = path.extname(file.originalname);
    cb(null, Date.now() + file.originalname); // nombre único
  },
});

export const upload = multer({ storage });
