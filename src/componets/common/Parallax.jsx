import React from "react";
import HomeCarousel from "./HomeCarousel";

const Parallax = () => {
  return (
    <div className="parallax bg-fixed bg-cover bg-center relative">
    <div className="container mx-auto text-center px-0 py-1 flex flex-col items-center justify-center">
      {/* Carousel component */}
      <HomeCarousel />
  
      {/* Centered Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
        <div className="animated-texts">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Experience the Best Hospitality at <span className="text-purple-500">Paradise Grove Inn</span>
          </h1>
          <h3 className="text-lg md:text-xl text-gray-300 mt-3">
            We offer the best services for all your needs.
          </h3>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Parallax;
