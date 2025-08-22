
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// place order by user
const placeOrder = async (req, res)=>{
   try {
    const { userId, items, amount, address } = req.body;
   const orderData = {
    userId,
    items,
    amount,
    address,
    paymentMethod: "COD",
    payment: false,
    date: Date.now()
   }

    const newOrder = await orderModel(orderData);
    newOrder.save();
    
    await userModel.findByIdAndUpdate(userId, {cartData: {}})
    res.json({success: true, message: "Order placed"})
   } 
    catch (error) {
      console.log(error);
      res.json({success: false, message: error.message});
   }
}
// place order with stripe
const placeOrderStripe = async (req, res)=>{

}

// place order with razorpay
const placeOrderRazorpay = async (req, res)=>{

}

// all orders for admin panel
const allOrders = async (req, res)=>{
  try{
    const orders = await orderModel.find({});
    res.json({success: true, orders});
  } 
   
  catch(error){
   console.log(error)
   res.json({success: false, message: error.message})
  }
}

// all orders for user
const userOrders = async (req, res)=> {
  try {
    const {userId} = req.body;
    const orders = await orderModel.find({userId});

    res.json({success: true, orders});
  } 
   catch (error) {
   console.log(error)
   res.json({success: false, message: error.message})
  }
}

// update order status by admin panel
const updateStatus = async (req, res)=>{
   const {orderId, status} = req.body;
   try {
    await orderModel.findByIdAndUpdate(orderId, {status});
    res.json({success: true, message: "Order status updated"});
   } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message});
   }
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }

