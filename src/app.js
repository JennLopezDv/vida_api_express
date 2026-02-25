import express from 'express';
import { doctorRoutes } from './routes/doctor.route.js';
/* import { appointmentRoutes } from './routes/appoinment.route.js'; */
import { specialtiesRoutes } from './routes/specialties.route.js';
import { patientsRoutes } from './routes/patient.route.js';

const app = express();

app.use(express.json());


/* app.use('/appointments', appointmentRoutes); */
app.use('/doctors', doctorRoutes);
app.use('/specialties', specialtiesRoutes);
app.use('/patients', patientsRoutes);

export default app;