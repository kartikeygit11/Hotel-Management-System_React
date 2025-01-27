import React from 'react'
import {  useLocation } from "react-router-dom"
import Header from '../common/Header'



const BookingSuccess = () => {
	const location = useLocation()
	const message = location.state?.message
	const error = location.state?.error
    return (
        <div className="container mx-auto p-6">
         <Header title="Room Reserved!We Look Forward to Your Stay."/>
          
          
          <div className="mt-5 text-center">
            {message ? (
              <div>
                <h3 className="text-green-600 text-xl font-semibold">Booking Success!</h3>
                <p className="text-green-500 mt-2">{message}</p>
              </div>
            ) : (
              <div>
                <h3 className="text-red-600 text-xl font-semibold">Error Booking Room!</h3>
                <p className="text-red-500 mt-2">{error}</p>
              </div>
            )}
          </div>
        </div>
      );
    }
export default BookingSuccess