import { Router } from "express";
import { createSpeacialties, getAllSpe, deleteSpe, getSpecialtiesById } from "../controllers/specialties.controller.js";

export const specialtiesRoutes = Router();

specialtiesRoutes.post('/', createSpeacialties)
specialtiesRoutes.get('/', getAllSpe)
specialtiesRoutes.get('/:id', getSpecialtiesById)
specialtiesRoutes.delete('/:id', deleteSpe)



