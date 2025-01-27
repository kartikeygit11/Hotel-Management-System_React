import React, { useState, useEffect } from "react"
import moment from "moment"
import { useNavigate } from "react-router-dom"

const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
	const checkInDate = moment(booking.checkInDate)
	const checkOutDate = moment(booking.checkOutDate)
	const numberOfDays = checkOutDate.diff(checkInDate, "days")
	const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)
	const [isProcessingPayment, setIsProcessingPayment] = useState(false)
	const navigate = useNavigate()

	const handleConfirmBooking = () => {
		setIsProcessingPayment(true)
		setTimeout(() => {
			setIsProcessingPayment(false)
			setIsBookingConfirmed(true)
			onConfirm()
		}, 3000)
	}

	useEffect(() => {
		if (isBookingConfirmed) {
			navigate("/booking-success")
		}
	}, [isBookingConfirmed, navigate])
 
    return (
      <div className="flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mt-5">
          <h4 className="text-lg font-semibold text-blue-600 mb-4 text-center">Reservation Summary</h4>
          
          <p className="text-gray-700">
            Name: <strong>{booking.guestFullName}</strong>
          </p>
          <p className="text-gray-700">
            Email: <strong>{booking.guestEmail}</strong>
          </p>
          <p className="text-gray-700">
            Check-in Date: <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong>
          </p>
          <p className="text-gray-700">
            Check-out Date: <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong>
          </p>
          <p className="text-gray-700">
            Number of Days Booked: <strong>{numberOfDays}</strong>
          </p>
  
          <div className="mt-4">
            <h5 className="text-md font-semibold text-blue-600">Number of Guests</h5>
            <p className="text-gray-700">
              Adults: <strong>{booking.numOfAdults}</strong>
            </p>
            <p className="text-gray-700">
              Children: <strong>{booking.numOfChildren}</strong>
            </p>
          </div>
  
          {payment > 0 ? (
            <>
              <p className="text-gray-700 mt-4">
                Total Payment: <strong>₹{payment}</strong>
              </p>
  
              {isFormValid && !isBookingConfirmed ? (
                <button
                  onClick={handleConfirmBooking}
                  className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600 transition-colors w-full flex items-center justify-center"
                >
                  {isProcessingPayment ? (
                    <>
                      <span className="loader mr-2"></span> Booking Confirmed, Make Payment At Hotel...
                    </>
                  ) : (
                    "Confirm Booking & Proceed to Payment"
                  )}
                </button>
              ) : isBookingConfirmed ? (
                <div className="flex justify-center items-center mt-4">
                  <div className="loader text-blue-500"></div>
                </div>
              ) : null}
            </>
          ) : (
            <p className="text-red-500 mt-4">Check-out date must be after check-in date.</p>
          )}
        </div>
      </div>
    );
  }
export default BookingSummary;