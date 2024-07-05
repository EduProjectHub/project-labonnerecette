import { Router } from 'express';
const router = Router();
import { saveRecipes, showRecipe, deleteRecipe,recipeUser } from '../controllers/recipes.js';
import { ensureAuth } from '../middlewares/auth.js';

// Configuración de subida de archivos

// Middleware para subida de archivos

// Definir las rutas
router.post('/recipe', ensureAuth, saveRecipes);
router.get('/show-recipe/:id', ensureAuth, showRecipe );
router.delete('/delete-recipe/:id', ensureAuth, deleteRecipe);
router.get('/recipe-user/:id/:page?', ensureAuth, recipeUser);

export default router;