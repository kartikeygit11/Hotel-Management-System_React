import React, { useEffect, useState } from "react"
import {
	FaUtensils,
	FaWifi,
	FaTv,
	FaWineGlassAlt,
	FaParking,
	FaCar,
	FaTshirt
} from "react-icons/fa"
import BookingForm from "./BookingForm"
import { useParams } from "react-router-dom"
import { getRoomById } from "../utils/ApiFunction"
import RoomCarousel from "../common/RoomCarousel"
const CheckOut = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [roomInfo, setRoomInfo] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	})

	const { roomId } = useParams()

	useEffect(() => {
		setTimeout(() => {
			getRoomById(roomId)
				.then((response) => {
					setRoomInfo(response)
					setIsLoading(false)
				})
				.catch((error) => {
					setError(error)
					setIsLoading(false)
				})
		}, 1000)
	}, [roomId])
    return (
        <div>
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mt-5 mb-5">
                        {isLoading ? (
                            <p>Loading room information...</p>
                        ) : error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            <div className="room-info bg-white shadow-md rounded-lg p-4">
                                <img
                                    src={`data:image/png;base64,${roomInfo.photo}`}
                                    alt="Room photo"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <table className="w-full text-left">
                                    <tbody>
                                        <tr className="border-b">
                                            <th className="py-2 px-4 font-semibold">Room Type:</th>
                                            <td className="py-2 px-4">{roomInfo.roomType}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <th className="py-2 px-4 font-semibold">Price per night:</th>
                                            <td className="py-2 px-4">₹{roomInfo.roomPrice}</td>
                                        </tr>
                                        <tr>
                                            <th className="py-2 px-4 font-semibold">Room Service:</th>
                                            <td className="py-2 px-4">
                                                <ul className="list-none space-y-2">
                                                    <li className="flex items-center">
                                                        <FaWifi className="mr-2" /> Wifi
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaTv className="mr-2" /> Netflix Premium
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaUtensils className="mr-2" /> Breakfast
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaWineGlassAlt className="mr-2" /> Mini bar refreshment
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaCar className="mr-2" /> Car Service
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaParking className="mr-2" /> Parking Space
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaTshirt className="mr-2" /> Laundry
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                    <div className="md:w-2/3 mt-5 md:mt-0 md:ml-6">
                        <BookingForm />
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4 mt-8">
                <RoomCarousel />
            </div>
        </div>
    );
};

export default CheckOut;
