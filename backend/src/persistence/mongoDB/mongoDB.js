import mongoose from 'mongoose';
import config from '../../utils/config.js';


  try {
    await mongoose.connect(config.mongo_uri);
    console.log('♠ Conectado a MONGO');
  } catch (error) {
    console.log('### Error al conectar a MONGO:', error);
  }