import React from "react";
import Header from "./Header";
import {
  FaClock,
  FaCocktail,
  FaParking,
  FaSnowflake,
  FaTshirt,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";
import img1 from "../assests/service.jpg"

const HotelService = () => {
  return (
    <>
      <div className="">
       

        {/* Service Title with Background Image */}
        <div
          className="mt- text-center bg-cover bg-center bg-no-repeat py-10"
          style={{ backgroundImage: `url(${img1})`, minHeight: "400px"}} // Applying background image
        >
          <h4 className="text-2xl mt-20 md:text-3xl font-semibold text-gray-700">
            Services at{" "}
            <span className="text-purple-500">Paradise Grove Inn</span>
          </h4>
          <div className="flex items-center justify-center mt-2  font-semibold text-lg md:text-xl text-gray-700">
            <FaClock className="ml-2 mr-2" />
            24-Hour Front Desk
          </div>
        </div>
        <hr className="my-4" />

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h5 className="text-purple-600 flex items-center text-xl mb-4">
              <FaWifi className="mr-2" /> WiFi
            </h5>
            <p className="text-gray-600">
              Stay connected with high-speed internet access.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h5 className="text-purple-600 flex items-center text-xl mb-4">
              <FaUtensils className="mr-2" /> Breakfast
            </h5>
            <p className="text-gray-600">
              Start your day with a delicious breakfast buffet.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h5 className="text-purple-600 flex items-center text-xl mb-4">
              <FaTshirt className="mr-2" /> Laundry
            </h5>
            <p className="text-gray-600">
              Keep your clothes clean and fresh with our laundry service.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h5 className="text-purple-600 flex items-center text-xl mb-4">
              <FaCocktail className="mr-2" /> Mini-bar
            </h5>
            <p className="text-gray-600">
              Enjoy a refreshing drink or snack from our in-room mini-bar.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h5 className="text-purple-600 flex items-center text-xl mb-4">
              <FaParking className="mr-2" /> Parking
            </h5>
            <p className="text-gray-600">
              Park your car conveniently in our on-site parking lot.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h5 className="text-purple-600 flex items-center text-xl mb-4">
              <FaSnowflake className="mr-2" /> Air conditioning
            </h5>
            <p className="text-gray-600">
              Stay cool and comfortable with our air conditioning system.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default HotelService;
