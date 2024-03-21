const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://localhost:27017/login', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión a MongoDB exitosa');
}).catch((error) => {
    console.error('Error en la conexión a MongoDB:', error);
});

const miSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  correo: { type: String, required: true }
});

const MiModelo = mongoose.model('Lalo', miSchema);

app.get('/Lalo', async (req, res) => {
    try {
        const datos = await MiModelo.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});