import express from 'express';
import { router } from './routes'

const api = express();
api.use(express.json())
api.use(router)
api.listen(process.env.PORT || 3333, () => {
  console.log("Servidor on")
})