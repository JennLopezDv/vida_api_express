import { Router } from "express";
import { getAllAppoint } from "../controllers/appoinment.controller.js";

export const appointmentRoutes = Router();

/*appointmentRoutes.post('/triage', triage) */

appointmentRoutes.get('/', getAllAppoint);