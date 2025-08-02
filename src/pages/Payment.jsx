import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { visaLogo, paypalLogo, bankLogo } from "../assets/forImage"; // Adjust paths if needed
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("");

  const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit Card",
      logo: visaLogo,
    },
    {
      id: "paypal",
      name: "PayPal",
      logo: paypalLogo,
    },
    {
      id: "bank-transfer",
      name: "Bank Transfer",
      logo: bankLogo,
    },
  ];

  const handlePayment = () => {
    toast.success(" Order placed! We'll contact you soon.", {
      duration: 3000,
      position: "top-center",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <Toaster />
      <Link to="/detailsA">
        <button className="mb-8 px-4 py-2 bg-purple-600 hover:bg-purple-950 text-white rounded-md flex items-center gap-2">
          <IoArrowBackCircleOutline className="text-2xl" />
          Back
        </button>
      </Link>
      <h1 className="text-2xl font-bold mb-6 text-purple-700">
        Payment Method
      </h1>

      <div className="space-y-4 mb-6">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:shadow-md transition ${
              selectedMethod === method.id
                ? "border-purple-600 bg-purple-50"
                : "border-gray-300"
            }`}
          >
            <img
              src={method.logo}
              alt={method.name}
              className="w-12 h-12 object-contain"
            />
            <span className="font-medium text-gray-700">{method.name}</span>
          </div>
        ))}
      </div>

      {/* Payment details per method */}
      {selectedMethod === "credit-card" && (
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 border border-gray-300 rounded-md px-4 py-2"
            />
          </div>
        </div>
      )}

      {selectedMethod === "paypal" && (
        <div className="space-y-4 mb-6">
          <input
            type="email"
            placeholder="PayPal Email Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
      )}

      {selectedMethod === "bank-transfer" && (
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Account Holder Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="IBAN or Account Number"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        disabled={!selectedMethod}
        onClick={handlePayment}
        className={`w-full py-3 rounded-md font-semibold text-white transition ${
          selectedMethod
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Booking
      </button>
    </div>
  );
}

export default Payment;
