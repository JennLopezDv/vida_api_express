import { pool } from "../config/dbconfig.js";

/* Crear doctor */
export const createDoctor = async ({ name, specialty }) => {

    const query = 'CALL test.sp_create_doctor($1::text, $2::text, null, null)';
    const values = [name, specialty];

    try {
        const response = await pool.query(query, values);
        return response.rows[0];
    } catch (error) {
        console.error('Error al crear el doctor:', error);
        throw error;
    }
};

/* Obtener todos los doctores */
/* export const getAllDoctors = async () => {

    const query = `select p.name as nombre_paciente, p.*, d.* from test.doctor d
                   inner join test.appointment a on a.doctor_id =  d.id
                   inner join test.patient p on a.patient_id = p.id`;

    try {
        const response = await pool.query(query);
        return response.rows;
    } catch (error) {
        console.error('Error al obtener los doctores:', error);
        throw error;
    }

} */

/* Obtener todos los doctores */
export const getAllDoctors = async () => {
    const query = `select * from test.doctor`;

    try {
        const response = await pool.query(query);
        return response.rows;
    } catch (error) {
        console.error('Error al obtener los doctores:', error);
        throw error;
    }
};

/*Obtener doctores por ID */
export const getDoctorId = async (id) => {
    const query = `select * from test.doctor where id=$1`;
    const search = [id];

    try {
        const response = await pool.query(query, search);
        return response.rows;
    } catch (error) {
        console.error('Error al obtener el doctor por Id:', error);
        throw error;
    }
};



