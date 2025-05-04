import express from 'express';
const routes = express.Router();

import {personalDetail , eductionalDetail} from "../controllers/employeCont.js"
// routess

routes.post('/personaldet' , personalDetail);

routes.post('/educationaldet/:id' , eductionalDetail);


export default routes;