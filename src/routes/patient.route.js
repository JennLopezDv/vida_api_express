import { Router } from "express";
import { getAllPat, getPatientById, createPat } from "../controllers/patient.controller.js";

export const patientsRoutes = Router();

patientsRoutes.get('/', getAllPat);
patientsRoutes.get('/:id', getPatientById);
patientsRoutes.post('/', createPat);