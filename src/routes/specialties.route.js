import { Router } from "express";
import { createSpeacialties, getAllSpe, deleteSpe } from "../controllers/specialties.controller.js";

export const specialtiesRoutes = Router();

specialtiesRoutes.post('/', createSpeacialties)
specialtiesRoutes.get('/', getAllSpe)
specialtiesRoutes.delete('/:id', deleteSpe)



