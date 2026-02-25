import { pool } from "../config/dbconfig.js";


/** Obtener todas las especialidades */
export const getAllSpecialties = async () => {

    const query = `select * from test.specialty`

    try {
        const response = await pool.query(query);
        return response.rows;
    } catch (error) {
        console.error('Error al obtener las especialidades:', error);
        throw error;
    }

};

/** Obtener las especialidades por ID*/
export const getSpecialtiesId = async (id) => {
    const query = `select * from test.specialty where id=$1`;    
    const search = [id];
    try {
        const response = await pool.query(query, search);        
        return response.rows;
    } catch (error) {
        console.error('Error al obtener la especialidad', error);
        throw error;
    }
}


/** Crear las especialidades */
export const createSpecialties = async (name) => {

    const query = 'INSERT INTO test.specialty (name) VALUES ($1) RETURNING id';
    const values = [name];

    try {
        const response = await pool.query(query, values);
        return response.rows[0];
    } catch (error) {
        console.error('Error al crear la especialidad:', error);
        throw error;
    }

}

/** Eliminar las especialidades por ID*/
export const deleteSpecialties = async (id) => {
    const query = 'DELETE FROM test.specialty WHERE id = $1';
    const values = [id];

    try {
        const response = await pool.query(query, values);
        return response;

    } catch (error) {
        console.error(`Error al eliminar la especialidad:', ${error}`);
        throw error;
    }
}