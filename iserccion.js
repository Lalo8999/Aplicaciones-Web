const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';


const dbName = 'login';


const client = new MongoClient(url);

async function insertarDatos() {
    try {
        
        await client.connect();
        console.log('Conectado correctamente al servidor de MongoDB');

        
        const db = client.db(dbName);

        
        const collection = db.collection('Lalo');

       
        const datos = { nombre: 'Ejemplo', edad: 30, correo: 'ejemplo@example.com' };

        
        const resultado = await collection.insertOne(datos);
        console.log('Datos insertados correctamente:', resultado);

    } catch (error) {
        console.error('Error al insertar datos en MongoDB:', error);
    } finally {
        
        await client.close();
    }
}


insertarDatos();
