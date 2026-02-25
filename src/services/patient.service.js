import { pool } from "../config/dbconfig.js";

/** Obtener todos los pacientes */
export const getAllPatients = async () => {
    const query = `select * from test.patient`;

    try {
        const response = await pool.query(query);
        return response.rows;
    } catch (error) {
        console.error('Error al obtener los pacientes:', error);
        throw error;
    }
};

/** Obtener paciente por Id */
export const getPatientId = async (id) => {
    const query = `select * from test.patient where id=$1`;
    const search = [id];

    try {
        const response = await pool.query(query, search);
        return response.rows;
    } catch (error) {
        console.error('Error al obtener el paciente por Id:', error);
        throw error;
    }
};

/** Crear paciente */
export const createPatient = async ({ name, birth_date }) => {

    const query = 'INSERT INTO test.patient (name, birth_date) VALUES ($1, $2) RETURNING id';
    const values = [name, birth_date];
    console.log(values)

    try {
        const response = await pool.query(query, values);
        console.log(response)
        return response.rows[0];
    } catch (error) {
        console.error('Error al crear el paciente:', error);
        throw error;
    }
};
