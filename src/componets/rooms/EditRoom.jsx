import React, { useEffect, useState } from "react"
import { getRoomById, updateRoom } from "../utils/ApiFunction"
import { Link, useParams } from "react-router-dom"

const EditRoom = () => {
	const [room, setRoom] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	})

	const [imagePreview, setImagePreview] = useState("")
	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const { roomId } = useParams()

	const handleImageChange = (e) => {
		const selectedImage = e.target.files[0]
		setRoom({ ...room, photo: selectedImage })
		setImagePreview(URL.createObjectURL(selectedImage))
	}

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setRoom({ ...room, [name]: value })
	}

	useEffect(() => {
		const fetchRoom = async () => {
			try {
				const roomData = await getRoomById(roomId)
				setRoom(roomData)
				setImagePreview(roomData.photo)
			} catch (error) {
				console.error(error)
			}
		}

		fetchRoom()
	}, [roomId])

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await updateRoom(roomId, room)
			if (response.status === 200) {
				setSuccessMessage("Room updated successfully!")
				const updatedRoomData = await getRoomById(roomId)
				setRoom(updatedRoomData)
				setImagePreview(updatedRoomData.photo)
				setErrorMessage("")
			} else {
				setErrorMessage("Error updating room")
			}
		} catch (error) {
			console.error(error)
			setErrorMessage(error.message)
		}
	}

	return (
		<div className="container mx-auto mt-10 mb-10">
		  <h3 className="text-center mb-10 mt-10 text-2xl font-semibold">Edit Room</h3>
		  <div className="flex justify-center">
			<div className="w-full max-w-lg">
			  {successMessage && (
				<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
				  {successMessage}
				</div>
			  )}
			  {errorMessage && (
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
				  {errorMessage}
				</div>
			  )}
			  <form onSubmit={handleSubmit}>
				<div className="mb-5">
				  <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">
					Room Type
				  </label>
				  <input
					type="text"
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					id="roomType"
					name="roomType"
					value={room.roomType}
					onChange={handleInputChange}
				  />
				</div>
	  
				<div className="mb-5">
				  <label htmlFor="roomPrice" className="block text-sm font-medium text-gray-700">
					Room Price
				  </label>
				  <input
					type="number"
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					id="roomPrice"
					name="roomPrice"
					value={room.roomPrice}
					onChange={handleInputChange}
				  />
				</div>
	  
				<div className="mb-5">
				  <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
					Photo
				  </label>
				  <input
					required
					type="file"
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					id="photo"
					name="photo"
					onChange={handleImageChange}
				  />
				  {imagePreview && (
					<img
					  src={`data:image/jpeg;base64,${imagePreview}`}
					  alt="Room preview"
					  className="mt-3 max-w-full max-h-64 object-cover"
					/>
				  )}
				</div>
	  
				<div className="flex justify-between mt-5">
				  <Link to={"/existing-rooms"} className="text-sm text-blue-600 hover:underline">
					Back
				  </Link>
				  <button type="submit" className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
					Edit Room
				  </button>
				</div>
			  </form>
			</div>
		  </div>
		</div>
	  );
	  
}
export default EditRoom
