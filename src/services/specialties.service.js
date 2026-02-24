import { pool } from "../config/dbconfig.js";

export const getAllSpecialties = async () => {

    const query = `select * from test.specialty`

    try {
        const response = await pool.query(query);
        return response.rows;
    } catch (error) {
        console.error('Error al obtener las especialidades:', error);
        throw error;
    }

}

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

export const deleteSpecialties = async (id) => {
    const query = 'DELETE FROM test.specialty WHERE id = $1';

    try {
        const response = await pool.query(query, [id]);
        return response.rows[0];
    } catch (error) {
        console.error('Error al eliminar la especialidad:', error);
        throw error;
    }
}