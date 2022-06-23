import { Router } from 'express';
import { BuscaDocControler } from './controller/BuscaDocControler';

export const router = Router();

const buscaDocControler = new BuscaDocControler();

router.post('/doc', buscaDocControler.handle);
