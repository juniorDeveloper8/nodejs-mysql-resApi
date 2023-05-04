
import { Router } from "express";
import { actualizarUser, createUser, eliminarUser, getOneUSer, getUser } from "../controllers/userControllers.js";

const router = Router()

//peticiones
router.get('/user', getUser)

router.get('/user/:id', getOneUSer)

router.post('/user', createUser)

router.patch('/user/:id', actualizarUser)

router.delete('/user/:id', eliminarUser)

export default router;