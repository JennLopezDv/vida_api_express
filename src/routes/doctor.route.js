import { Router } from "express";
import { createDoc, getAllDoc, getDoctorById } from '../controllers/doctor.controller.js';


export const doctorRoutes = Router();

doctorRoutes.get('/', getAllDoc);
doctorRoutes.get('/:id', getDoctorById);
doctorRoutes.post('/', createDoc);