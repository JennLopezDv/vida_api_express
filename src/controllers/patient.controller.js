import { getAllPatients, getPatientId, createPatient, deletePatient } from "../services/patient.service.js";

/** Obtener todos los pacientes */
export const getAllPat = async (req, res) => {

    try {
        const patient = await getAllPatients();
        res.status(200).json({ response: patient });
    } catch (error) {
        console.error('Error al obtener los pacientes:', error);
        res.status(500).json({ error: error.message });
    }

};

/** Obtener paciente por Id */
export const getPatientById = async (req, res) => {

    try {
        const {id} = req.params
        const patient = await getPatientId(id);
        res.status(200).json({ response: patient });
    } catch (error) {
        console.error('Error al paciente por Id:', error);
        res.status(500).json({ error: error.message });
    }
};

/** Crear paciente */
export const createPat = async (req, res) => {

    const { name, birth_date } = req.body;

    try {
        const newPatient = await createPatient({ name, birth_date });

        if (!newPatient.rowCount === 0) {
            return res.status(500).json({ error: newPatient.error_message });
        }

        res.status(201).json({response: "Paciente"});

    } catch (error) {
        console.error('Error al crear el paciente:', error);
        res.status(500).json({ error: error.message });
    }
};

/** Eliminar paciente */
export const deletePati = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deletePatient(id);
        
        if (!result.rowCount === 0) {
            return res.status(500).json({ error: "No se ha podido eliminar el paciente" });
        }
        res.status(200).json({response: "Paciente eliminado correctamente"});
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}