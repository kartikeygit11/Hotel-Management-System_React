import React, { useEffect, useState } from "react";
import { getAllRooms } from "../utils/ApiFunction";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel"; // Import a responsive carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const RoomCarousel = () => {
  const [rooms, setRooms] = useState([{ id: "", roomType: "", roomPrice: "", photo: "" }]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllRooms()
      .then((data) => {
        setRooms(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="mt-10 text-center text-xl">Loading rooms...</div>;
  }
  if (errorMessage) {
    return <div className="text-red-600 mb-10 mt-10 text-center text-xl">Error: {errorMessage}</div>;
  }

  return (
    <section className="bg-gray-100 py-10 mb-10 shadow-md">
      <div className="text-center mb-5">
        <Link to="/rooms" className="text-purple-600 text-lg hover:underline">
          Browse all rooms
        </Link>
      </div>
  
      <div className="container mx-auto px-4">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          showStatus={false}
          emulateTouch
          autoPlay  /* Auto-slide functionality */
          interval={5000}  /* Change interval to 3 seconds */
          stopOnHover  /* Pauses the carousel when hovered */
        >
          {[...Array(Math.ceil(rooms.length / 4))].map((_, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rooms.slice(index * 4, index * 4 + 4).map((room) => (
                <div key={room.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <Link to={`/book-room/${room.id}`}>
                    <img
                      src={`data:image/png;base64, ${room.photo}`}
                      alt="Room Photo"
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-purple-600 text-xl font-semibold">{room.roomType}</h3>
                    <p className="text-gray-700 mt-2">₹{room.roomPrice}/night</p>
                    <div className="mt-4">
                      <Link
                        to={`/book-room/${room.id}`}
                        className="inline-block bg-purple-600 text-white text-sm px-4 py-2 rounded-full hover:bg-purple-700 transition"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
  
};

export default RoomCarousel;
