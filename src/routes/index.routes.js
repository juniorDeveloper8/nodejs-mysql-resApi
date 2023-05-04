
import { Router } from "express";
import { prueba } from "../controllers/index.Controllers.js";

const router = Router ()

router.get('/ping', prueba);

export default router;