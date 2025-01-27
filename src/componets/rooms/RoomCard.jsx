import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="w-full  mb-2">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap items-center p-6 h-25 ">
          {/* Room Image */}
          <div className="w-full md:w-1/4 flex-shrink-0 mb-3 md:mb-0">
            <Link to={`/book-room/${room.id}`}>
              <img
                src={`data:image/png;base64, ${room.photo}`}
                alt="Room Photo"
                className="w-full h-auto rounded-lg"
              />
            </Link>
          </div>
          {/* Room Details */}
          <div className="w-full md:flex-grow md:ml-4 px-5">
            <h5 className="text-2xl font-semibold text-gray-700">{room.roomType}</h5>
            <h6 className="text-lg font-semibold text-gray-500 mt-1">{room.roomPrice} / night</h6>
            <p className="text-gray-500 mt-2">
              Some room information goes here for the guest to read through.
            </p>
          </div>
          {/* Book Now Button */}
          <Link
  to={`/book-room/${room.id}`}
  className="inline-block text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
>
  Book Now
</Link>


         
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
