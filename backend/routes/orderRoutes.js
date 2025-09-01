import express from 'express'
import { placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middlewares/adminauth.js'
import userAuth from '../middlewares/userAuth.js';

const orderRouter = express.Router();

orderRouter.post('/list',adminAuth, allOrders);
orderRouter.post('/status',adminAuth, updateStatus);

// payment features
orderRouter.post('/place',userAuth,placeOrder);
orderRouter.post('/place-stripe',userAuth, placeOrderStripe);

// verify stripe payment
orderRouter.post('/verify-stripe', userAuth, verifyStripe);

// user feature
orderRouter.post('/userorders',userAuth, userOrders);

export default orderRouter;
