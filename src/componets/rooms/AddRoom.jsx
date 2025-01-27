import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {addRoom} from "../utils/ApiFunction"
import RoomTypeSelector from '../common/RoomTypeSelector'


const AddRoom = () => { 
  const[newRoom,setRoom]=useState({
    photo:null,
    roomType:"",
    roomNumber:""
  })
  const[imagePreview,setIamgePreview]=useState("")
  const[successMessage,setSuccessMessage]=useState("")
  const[errorMessage,setErrorMessage]=useState("")
  const handleRoomInputChange = (e) => {
		const name = e.target.name
		let value = e.target.value
		if (name === "roomPrice") {
			if (!isNaN(value)) {
				value = parseInt(value)
			} else {
				value = ""
			}
		}
		setRoom({ ...newRoom, [name]: value })
	}
  const handleImageChange = (e) => {
		const selectedImage = e.target.files[0]
		setRoom({ ...newRoom, photo: selectedImage })
		setIamgePreview(URL.createObjectURL(selectedImage))
	}
  const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
			if (success !== undefined) {
				setSuccessMessage("A new room was  added successfully !")
				setRoom({ photo: null, roomType: "", roomPrice: "" })
				setIamgePreview("")
				setErrorMessage("")
			} else {
				setErrorMessage("Error adding new room")
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 3000)
	}
  return (
    <>
      <section className="container mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">Add a New Room</h2>
            
            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {successMessage}
              </div>
            )}
  
            {/* Error Message */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {errorMessage}
              </div>
            )}
  
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Room Type Selector */}
              <div className="mb-5">
                <label
                  htmlFor="roomType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Room Type
                </label>
                <RoomTypeSelector
                  handleRoomInputChange={handleRoomInputChange} 
                  newRoom={newRoom} 
                />
              </div>
  
              {/* Room Price Input */}
              <div className="mb-5">
                <label
                  htmlFor="roomPrice"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Room Price
                </label>
                <input
                  required
                  type="number"
                  className="mt-1 block w-full py-2 px-3 rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  id="roomPrice"
                  name="roomPrice"
                  value={newRoom.roomPrice}
                  onChange={handleRoomInputChange}
                />
              </div>
  
              {/* Room Photo Input */}
              <div className="mb-5">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Room Photo
                </label>
                <input
                  required
                  name="photo"
                  id="photo"
                  type="file"
                  className="mt-1 block w-full text-sm text-gray-900 border border-black rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onChange={handleImageChange}
                />
  
                {/* Image Preview */}
                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      alt="Preview room photo"
                      className="max-w-full h-auto mx-auto rounded-lg shadow"
                      style={{ maxWidth: "400px", maxHeight: "400px" }}
                    />
                  </div>
                )}
              </div>
  
              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-6">
                <Link
                  to="/existing-rooms"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                >
                  View Existing Rooms
                </Link>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Room
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
  }
  

export default AddRoom