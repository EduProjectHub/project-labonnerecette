// Importaciones
import { Router } from "express";
import { register,login } from "../controllers/user.js";

const router = Router();


// Definir las rutas
router.post('/register', register);
router.post('/login', login);



export default router;