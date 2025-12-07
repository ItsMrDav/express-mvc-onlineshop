import express from 'express';
import { adminRoutes } from '../../routes/admin.js';
import { shopRoutes } from '../../routes/shop.js';
import { get404Page } from '../../controllers/not-found.js';
import path from 'path';

const app = express();
// Template engine configuration
app.set('view engine', 'ejs');
app.set('views', 'views');

// Application level middlewared
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(import.meta.dirname, '..', '..', 'public')));

// Route middlewares
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Middleware for 404 page for not defined routes
app.use(get404Page);

// Initiating the server
app.listen(8000, () => console.log(`Hello from port:8000 server`));
