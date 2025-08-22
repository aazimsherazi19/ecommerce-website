import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
import adminAuth from '../middlewares/adminauth.js'
import userAuth from '../middlewares/userAuth.js';

const orderRouter = express.Router();

orderRouter.post('/list',adminAuth, allOrders);
orderRouter.post('/status',adminAuth, updateStatus);

// payment features
orderRouter.post('/place',userAuth,placeOrder);
orderRouter.post('/place-stripe',userAuth, placeOrderStripe);
orderRouter.post('/place-razorpay',userAuth, placeOrderRazorpay);

// user feature
orderRouter.post('/userorders',userAuth, userOrders);

export default orderRouter;
