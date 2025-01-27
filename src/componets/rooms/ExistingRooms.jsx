import React, { useState,useEffect } from 'react'
import { deleteRooms,getAllRooms } from "../utils/ApiFunction"
import RoomFilter from "../common/RoomFilter"
import RoomPaginator from "../common/RoomPaginator"
import { FaEdit, FaEye, FaPlus, FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

export const ExistingRooms = () => {
        const [rooms,setRooms]=useState([])
        const [currentPage,setCurrentPage]=useState(1)
        const [roomsPerPage] = useState(8)
	const [isLoading, setIsLoading] = useState(false)
	const [filteredRooms, setFilteredRooms] = useState([{ id: "", roomType: "", roomPrice: "" }])
	const [selectedRoomType, setSelectedRoomType] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [successMessage, setSuccessMessage] = useState("")
    useEffect(() => {
		fetchRooms()
	}, [])

	const fetchRooms = async () => {
		setIsLoading(true)
		try {
			const result = await getAllRooms()
			setRooms(result)
			setIsLoading(false)
		} catch (error) {
			setErrorMessage(error.message)
			setIsLoading(false)
		}
	}
    useEffect(() => {
		if (selectedRoomType === "") {
			setFilteredRooms(rooms)
		} else {
			const filteredRooms = rooms.filter((room) => room.roomType === selectedRoomType)
			setFilteredRooms(filteredRooms)
		}
		setCurrentPage(1)
	}, [rooms, selectedRoomType])
    const handlePaginationClick = (pageNumber) => {
		setCurrentPage(pageNumber)
	}
    const handleDelete = async (roomId) => {
		try {
			const result = await deleteRooms(roomId)
			if (result === "") {
				setSuccessMessage(`Room No ${roomId} was delete`)
				fetchRooms()
			} else {
				console.error(`Error deleting room : ${result.message}`)
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
    
	
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 3000)
    }

	const calculateTotalPages = (filteredRooms, roomsPerPage, rooms) => {
		const totalRooms = filteredRooms.length > 0 ? filteredRooms.length : rooms.length
		return Math.ceil(totalRooms / roomsPerPage)
	}

	const indexOfLastRoom = currentPage * roomsPerPage
	const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
	const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom)


  return (
    <>
    <div className="max-w-md lg:max-w-lg mx-auto">
        {successMessage && <p className="bg-green-100 text-green-700 p-4 rounded mt-5">{successMessage}</p>}

        {errorMessage && <p className="bg-red-100 text-red-700 p-4 rounded mt-5">{errorMessage}</p>}
    </div>

    {isLoading ? (
        <p>Loading existing rooms...</p>
    ) : (
        <>
        <section className="mt-5 mb-5 max-w-4xl mx-auto">
            <div className="flex justify-between mb-3 mt-5 items-center">
                <h2 className="text-xl font-bold">Existing Rooms</h2>
                <Link to={"/add-rooms"} className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                    <FaPlus className="mr-2" /> Add Room
                </Link>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <RoomFilter data={rooms} setFilteredData={setFilteredRooms} />
            </div>
    
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-center">
                            <th className="py-2 border-b">ID</th>
                            <th className="py-2 border-b">Room Type</th>
                            <th className="py-2 border-b">Room Price</th>
                            <th className="py-2 border-b">Actions</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {currentRooms.map((room) => (
                            <tr
                                key={room.id}
                                className="text-center border-t hover:bg-gray-100 transition-colors duration-200"
                            >
                                <td className="py-2 border-b">{room.id}</td>
                                <td className="py-2 border-b">{room.roomType}</td>
                                <td className="py-2 border-b">{room.roomPrice}</td>
                                <td className="py-2 border-b flex justify-center space-x-2">
                                <div className="flex space-x-3">
         <Link 
                  to={`/view-room/${room.id}`} 
                        className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-200 ease-in-out shadow-lg"
                                                  >
                                       <FaEye className="w-5 h-5"/>
                                       </Link>
                                      <Link 
                            to={`/update/${room.id}`} 
                            className="flex items-center justify-center bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-200 ease-in-out shadow-lg"
                                                  >
                              <FaEdit className="w-5 h-5"/>
                                      </Link>
                                               </div>

                                    <button
												className="btn btn-danger btn-sm ml-5"
												onClick={() => handleDelete(room.id)}>
												<FaTrashAlt />
											</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    
            <RoomPaginator
                currentPage={currentPage}
                totalPages={calculateTotalPages(filteredRooms, roomsPerPage, rooms)}
                onPageChange={handlePaginationClick}
            />
        </section>
    </>
    
    )}
</>
  )
}

export default ExistingRooms