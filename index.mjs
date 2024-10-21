import expressEjsLayouts from "express-ejs-layouts";
import express from 'express'
import ejs from 'ejs'
import ResumeController from "./Src/controller/resumecontroller.mjs";
import path from 'path';



const app=express();
const resumecontroller=new ResumeController();



app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'Src', 'views'));

app.use(expressEjsLayouts);


app.get('/',resumecontroller.getResume);



app.listen(4700);




