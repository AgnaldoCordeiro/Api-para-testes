import express from 'express';
import cors from 'cors'
import { router } from './routes'

const api = express();
api.use(cors());
api.use(express.json({limit: '50mb'}));
api.use(express.urlencoded({ extended: false, limit: '50mb' }));
api.use(express.json());
api.set("view engine", "ejs");
api.use(router);
api.listen(process.env.PORT || 3333, () => {
  console.log("Servidor on")
})