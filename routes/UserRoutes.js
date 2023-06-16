import express from "express";
import { register } from "../controllers/UsersControllers.js";
import { ValidUser, registrationCheck } from "../middlewares/authMiddleware.js";
import { GetTemp } from "../controllers/WeatherControllers.js";




var router = express.Router();

router.post('/register',registrationCheck,register)
router.post('/GetTemp',ValidUser,GetTemp)





export default router;