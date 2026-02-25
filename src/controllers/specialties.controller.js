import { createSpecialties, getAllSpecialties, deleteSpecialties, getSpecialtiesId } from "../services/specialties.service.js";

/* Crear especialidad */
export const createSpeacialties = async (req, res) => {

    const { name } = req.body;

    try {
        const newSpecialties = await createSpecialties(name);
        console.log(newSpecialties)

        if (!newSpecialties.id) {
            return res.status(500).json({ error: newSpecialties.error_message });
        }

        res.status(201).json({response: "Especialidad creada correctamente"});

    } catch (error) {
        console.error('Error al crear la especialidad:', error);
        res.status(500).json({ error: error.message });
    }

};

/* Obtener la especialidad por ID*/
export const getSpecialtiesById = async(req, res) => {        
    try {
        const {id} = req.params
        const specialties = await getSpecialtiesId(id);
        res.status(200).json({ response:specialties })
    } catch (error) {
        console.error('Error al obtener la especialidad por Id', error);
        res.status(500).json({ error: error.message })
    }
}


/* Obtener todas las especialidades*/
export const getAllSpe = async (req, res) => {

    try {
        const specialties = await getAllSpecialties();
        res.status(200).json({ response: specialties });
    } catch (error) {
        console.error('Error al obtener las especialidades:', error);
        res.status(500).json({ error: error.message });
    }

};

/* Eliminar especialidad por ID */
export const deleteSpe = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await deleteSpecialties(id);
        
        if (!result.rowCount === 0) {
            return res.status(500).json({ error: "No se ha podido eliminar la especialidad" });
        }

        res.status(200).json({response: "Especialidad eliminado correctamente"});
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

