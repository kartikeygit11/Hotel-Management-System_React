import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to check if fields are filled
    if (
      accountNumber.length >= 8 &&
      sortCode.length === 6 &&
      cardNumber.length === 16 &&
      expirationDate.length === 5 &&
      cvv.length === 3 &&
      nameOnCard.trim().length > 0
    ) {
      // Navigate to booking-success page if all fields are valid
      navigate("/booking-success");
    } else {
      setErrorMessage("Please enter valid bank details.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Payment Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              id="nameOnCard"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter the name on the card"
              required
            />
          </div>

          <div>
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter your account number"
              required
            />
          </div>

          <div>
            <label htmlFor="sortCode" className="block text-sm font-medium text-gray-700">
              Sort Code
            </label>
            <input
              type="text"
              id="sortCode"
              value={sortCode}
              onChange={(e) => setSortCode(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter your sort code (e.g., 123456)"
              required
            />
          </div>

          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter your 16-digit card number"
              required
            />
          </div>

          <div>
            <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
              Expiration Date (MM/YY)
            </label>
            <input
              type="text"
              id="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="MM/YY"
              required
            />
          </div>

          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              placeholder="Enter your 3-digit CVV"
              required
            />
          </div>

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Complete Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
