import { createDoctor, getAllDoctors, getDoctorId } from "../services/doctor.service.js";

/*Crear doctor */
export const createDoc = async (req, res) => {

    const { name, specialty } = req.body;

    try {
        const newDoctor = await createDoctor({ name, specialty });

        if (!newDoctor.status) {
            return res.status(500).json({ error: newDoctor.error_message });
        }

        res.status(201).json({response: newDoctor.error_message});

    } catch (error) {
        console.error('Error al crear el doctor:', error);
        res.status(500).json({ error: error.message });
    }

};


/*Obtener todos los doctores */
export const getAllDoc = async (req, res) => {

    try {
        const doctors = await getAllDoctors();
        res.status(200).json({ response: doctors });
    } catch (error) {
        console.error('Error al obtener los doctores:', error);
        res.status(500).json({ error: error.message });
    }

};

/*Obtener todos doctor por Id */
export const getDoctorById = async (req, res) => {

    try {
        const {id} = req.params
        const doctors = await getDoctorId(id);
        res.status(200).json({ response: doctors });
    } catch (error) {
        console.error('Error al doctor por Id:', error);
        res.status(500).json({ error: error.message });
    }

};