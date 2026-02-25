import { pool } from "../config/dbconfig.js";

/** Obtener todas las citas por diagnostico */
export const getAllAppoinment = async () => {
    const query = `select * from test.appointment where diagnosis = 'Gastritis'`;
    try {
        const response = await pool.query(query)
        return response.rows
    } catch (error) {
        console.error('Error al obtener las citas.', error)
        throw error
    }
};