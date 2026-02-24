import app from './app.js';
import { env } from './config/env.js';
import {pool} from './config/dbconfig.js';

/* app.listen(env.APP_PORT || 3000, () => {
    try {
        console.log(`🚀 Servidor corriendo en puerto http://localhost:${env.APP_PORT || 3000}`)
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}); */

async function startServer() {
    try {
        // Verifica conexión a la base de datos
        await pool.query('SELECT 1');
        console.log('Database connected'); 

        // Inicia servidor solo si la DB responde
        app.listen(env.APP_PORT, () => {
            console.log(`Server running on port ${env.APP_PORT}`);
        });

    } catch (error) {
        console.error('Failed to connect to database:', error.message);
        process.exit(1); // Detiene la app si no hay DB
    }
}

startServer();