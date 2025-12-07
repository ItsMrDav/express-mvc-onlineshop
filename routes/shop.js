import express from 'express';
import * as shopController from '../controllers/shop.js';

export const shopRoutes = express.Router();

shopRoutes.get('/', shopController.getIndex);

shopRoutes.get('/products', shopController.getProducts);

shopRoutes.get('/products/:productId', shopController.getProduct);

shopRoutes.get('/cart', shopController.getCart);

shopRoutes.post('/cart', shopController.postCart);

shopRoutes.post('/cart-delete-item', shopController.postCartDeleteProduct);

shopRoutes.get('/orders', shopController.getOrders);

shopRoutes.get('/checkout', shopController.getCheckout);
