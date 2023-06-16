import express from "express";
import { register } from "../controllers/UsersControllers.js";
import { ValidUser, registrationCheck } from "../middlewares/authMiddleware.js";
import { GetAstro, GetTemp, GetWindSpeed } from "../controllers/WeatherControllers.js";




var router = express.Router();

router.post('/register',registrationCheck,register)
router.post('/GetTemp',ValidUser,GetTemp)
router.post('/GetWindSpeed',ValidUser,GetWindSpeed)
router.post('/GetAstro',ValidUser,GetAstro)







export default router;