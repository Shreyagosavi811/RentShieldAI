import express from 'express';
const router = express.Router();

import { searchPG } from '../controllers/searchController.js';

router.get('/', searchPG);

export default router;