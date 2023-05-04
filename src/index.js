
import express from "express";
import router from "./routes/user.routes.js";
import indexRout from './routes/index.routes.js';

import { PORT } from './config.js';

const app = express()

app.use(express.json())

app.use(indexRout)
app.use('/api', router)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'endpoint Not Found'
  })
})

app.listen(PORT)

console.log('system de eyectore iniciado ಥ_ಥ', PORT);