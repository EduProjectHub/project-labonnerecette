// Importaciones
import { Router } from "express";
import { register,login, profile } from "../controllers/user.js";

const router = Router();


// Definir las rutas
router.post('/register', register);
router.post('/login', login);
router.get('/profile', profile);



export default router;