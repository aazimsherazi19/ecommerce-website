import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from 'axios';
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    cartItems,
    setCartItems,
    delivery_fee,
    products,
    backendUrl,
    getCartAmount,
    token,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch(method){
        // API Call for cod
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place',orderData, {headers:{token}});
          if(response.data.success){
            setCartItems({});
            navigate('/orders');
            toast.success("Order placed successfully");
          } else {
            toast.error(response.data.message);
            
          }
        break;

        case 'stripe':
          const stripeResponse = await axios.post(backendUrl + '/api/order/place-stripe', orderData, { headers: { token } });
          if (stripeResponse.data.success) {
            const {session_url} = stripeResponse.data;
            window.location.replace(session_url);
          } else {
            toast.error(stripeResponse.data.message);
          }
          break;
          

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-200"
    >
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border w-full py-1.5 px-3.5 rounded border-gray-300 "
            type="text"
            placeholder="First Name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border w-full py-1.5 px-3.5 rounded border-gray-300"
            type="text"
            placeholder="Lastname"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border w-full py-1.5 px-3.5 rounded border-gray-300"
          type="email"
          placeholder="Email Address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border w-full py-1.5 px-3.5 rounded border-gray-300"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border w-full py-1.5 px-3.5 rounded border-gray-300 "
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border w-full py-1.5 px-3.5 rounded border-gray-300"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border w-full py-1.5 px-3.5 rounded border-gray-300 "
            type="number"
            placeholder="Zipcode"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border w-full py-1.5 px-3.5 rounded border-gray-300"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border w-full py-1.5 px-3.5 rounded border-gray-300"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* {right side} */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setMethod("stripe")}
              className="border border-gray-300 rounded p-2 px-3 flex items-center gap-3 cursor-pointer"
            >
              <p
                className={`border border-gray-300 rounded-full h-3.5 min-w-3.5 ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
           
            <div
              onClick={() => setMethod("cod")}
              className="border border-gray-300 rounded p-2 px-3 flex items-center gap-3 cursor-pointer"
            >
              <p
                className={`border border-gray-300 rounded-full h-3.5 min-w-3.5 ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="mx-4 text-gray-500 text-sm font-medium">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              // onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
