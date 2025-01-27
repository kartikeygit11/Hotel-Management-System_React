import React from 'react'
import { useEffect,useState} from "react"
import { bookRoom , getRoomById } from "../utils/ApiFunction"
import { useNavigate, useParams } from "react-router-dom"
import moment from "moment"
import BookingSummary from './BookingSummary'




const BookingForm = () => {
  const [validated, setValidated] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	const [roomPrice, setRoomPrice] = useState(0)

const currentUser = localStorage.getItem("userId")

	const [booking, setBooking] = useState({
		guestFullName: "",
		guestEmail: "",
		checkInDate: "",
		checkOutDate: "",
		numOfAdults: "",
		numOfChildren: ""
	})
	const { roomId } = useParams()
	const navigate = useNavigate()

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setBooking({ ...booking, [name]: value })
		setErrorMessage("")
	}


	const getRoomPriceById = async (roomId) => {
		try {
			const response = await getRoomById(roomId);
			setRoomPrice(response.roomPrice);
		} catch (error) {
			console.error("Error fetching room price:", error.message);
			setErrorMessage("Failed to fetch room price. Please try again later.");
		}
	};

	useEffect(() => {
		getRoomPriceById(roomId)
	}, [roomId])

	const calculatePayment = () => {
		const checkInDate = moment(booking.checkInDate)
		const checkOutDate = moment(booking.checkOutDate)
		const diffInDays = checkOutDate.diff(checkInDate, "days")
		const paymentPerDay = roomPrice ? roomPrice : 0
		return diffInDays * paymentPerDay
	}

	const isGuestCountValid = () => {
		const adultCount = parseInt(booking.numOfAdults)
		const childrenCount = parseInt(booking.numOfChildren)
		const totalCount = adultCount + childrenCount
		return totalCount >= 1 && adultCount >= 1
	}

	const isCheckOutDateValid = () => {
		if (!moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))) {
			setErrorMessage("Check-out date must be after check-in date")
			return false
		} else {
			setErrorMessage("")
			return true
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.currentTarget
		if (form.checkValidity() === false || !isGuestCountValid() || !isCheckOutDateValid()) {
			e.stopPropagation()
		} else {
			setIsSubmitted(true)
		}
		setValidated(true)
	}

	const handleFormSubmit = async () => {
		try {
			const confirmationCode = await bookRoom(roomId, booking)
			setIsSubmitted(true)
			navigate("/booking-success", { state: { message: confirmationCode } })
		} catch (error) {
			const errorMessage = error.message
			console.log(errorMessage)
			navigate("/booking-success", { state: { error: errorMessage } })
		}
	}
 
 
return(

<div className="container mx-auto px-4 mb-10 ">
  <div className="grid md:grid-cols-2 gap-8">
    <div className="bg-white shadow-lg p-8 rounded-lg mt-5 border border-gray-200">
      <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Reserve Your Room</h4>
      <form noValidate validated={validated.toString()} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="guestFullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            required
            type="text"
            id="guestFullName"
            name="guestFullName"
            value={booking.guestFullName}
            placeholder="Enter your full name"
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
          <div className="text-red-500 text-sm mt-1">Please enter your full name.</div>
        </div>

        <div>
          <label htmlFor="guestEmail" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            required
            type="email"
            id="guestEmail"
            name="guestEmail"
            value={booking.guestEmail}
            placeholder="Enter your email"
            onChange={handleInputChange}
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
          />
          <div className="text-red-500 text-sm mt-1">Please enter a valid email address.</div>
        </div>

        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-sm font-semibold">Lodging Period</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
                Check-in Date
              </label>
              <input
                required
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={booking.checkInDate}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
              <div className="text-red-500 text-sm mt-1">Please select a check-in date.</div>
            </div>

            <div>
              <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
                Check-out Date
              </label>
              <input
                required
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={booking.checkOutDate}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
              <div className="text-red-500 text-sm mt-1">Please select a check-out date.</div>
            </div>
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </fieldset>

        <fieldset className="border border-gray-300 p-4 rounded-lg">
          <legend className="text-sm font-semibold">Number of Guests</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div>
              <label htmlFor="numOfAdults" className="block text-sm font-medium text-gray-700">
                Adults
              </label>
              <input
                required
                type="number"
                id="numOfAdults"
                name="numOfAdults"
                value={booking.numOfAdults}
                min={1}
                placeholder="0"
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
              <div className="text-red-500 text-sm mt-1">Please select at least 1 adult.</div>
            </div>

            <div>
              <label htmlFor="numOfChildren" className="block text-sm font-medium text-gray-700">
                Children
              </label>
              <input
                required
                type="number"
                id="numOfChildren"
                name="numOfChildren"
                value={booking.numOfChildren}
                placeholder="0"
                min={0}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
              />
              <div className="text-red-500 text-sm mt-1">Select 0 if no children.</div>
            </div>
          </div>
        </fieldset>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Continue
          </button>
        </div>
      </form>
    </div>

    {isSubmitted && (
      <div className="bg-white shadow-lg p-8 rounded-lg mt-5 md:col-span-1 border border-gray-200">
        <BookingSummary
								booking={booking}
								payment={calculatePayment()}
								onConfirm={handleFormSubmit}
								isFormValid={validated}
							/>
        <p className="text-lg font-semibold">Booking Summary</p>
      </div>
    )}
  </div>
</div>

	  );
	}

export default BookingForm