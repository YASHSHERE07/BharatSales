import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [paymentDetails, setPaymentDetails] = useState({
    email: "",
    cardHolder: "",
    cardDetails: "",
    billingAddress: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", paymentDetails);
    clearCart();
    navigate("/thank-you");
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-10 lg:px-20 xl:px-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
          {/* Order Summary */}
          <div className="lg:w-3/5">
            <h2 className="text-2xl font-semibold text-gray-800">
              Order Summary
            </h2>
            <div className="mt-8 space-y-4 rounded-lg border bg-white p-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex">
                  <img
                    src={item.image}
                    alt="Product Image"
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                  <div className="ml-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">{`Size: ${item.size}`}</p>
                    </div>
                    <p className="text-lg font-semibold">{`$${item.price}`}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold">
                Total: ${calculateTotal()}
              </p>
            </div>
          </div>

          {/* Payment Details Form */}
          <div className="mt-10 lg:mt-0 lg:w-2/5">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border bg-white p-6"
            >
              <h2 className="text-xl font-medium">Payment Details</h2>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={paymentDetails.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="cardHolder"
                  className="block text-sm font-medium text-gray-700"
                >
                  Holder
                </label>
                <input
                  type="text"
                  id="cardHolder"
                  name="cardHolder"
                  value={paymentDetails.cardHolder}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="cardDetails"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Details
                </label>
                <input
                  type="text"
                  id="cardDetails"
                  name="cardDetails"
                  value={paymentDetails.cardDetails}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="billingAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Billing Address
                </label>
                <input
                  type="text"
                  id="billingAddress"
                  name="billingAddress"
                  value={paymentDetails.billingAddress}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <div className="flex-1">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={paymentDetails.state}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={paymentDetails.zip}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
