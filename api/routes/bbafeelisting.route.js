import express from 'express';
import { createListing } from '../controllers/bbafeelisting.controller.js';
import { verifyToken } from '../utils/verifyuser.js';

const router = express.Router();

router.post('/create' , verifyToken,createListing)

export default router;