import express from 'express';
import * as productsController from '../controllers/products.js';

export const shopRoutes = express.Router();

shopRoutes.get('/', productsController.getProducts);
