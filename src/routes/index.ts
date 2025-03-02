import { Router } from 'express';
import apiRoutes from './api';

const router = Router();

// Configurando as rotas principais
router.use('/api', apiRoutes);

export default router;