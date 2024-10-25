import express from 'express';
import expressEjsLayouts from "express-ejs-layouts";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import ResumeController from "./Src/controller/resumecontroller.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const resumecontroller = new ResumeController();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Src', 'views'));
app.use(expressEjsLayouts);
app.set('layout', 'layout'); // Set default layout

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', resumecontroller.getResume);
app.get('/mytemplate', resumecontroller.getTemplate);
app.get('/myfirsttemplate', resumecontroller.getFirstTemplate);




app.listen(4700, () => {
    console.log('Server is running on port 4700');
});