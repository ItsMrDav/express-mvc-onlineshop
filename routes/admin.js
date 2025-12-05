import express from 'express';
import * as productsController from '../controllers/products.js';

export const adminRoutes = express.Router();

// /admin/add-product => GET
adminRoutes.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
adminRoutes.post('/add-product', productsController.postAddProduct);
