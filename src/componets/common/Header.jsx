import React from "react";
import backgroundImage from '../assests/bsuccess.jpg'


const Header = ({ title }) => {
  return (
    <header
    className="relative bg-cover bg-center h-64 sm:h-80 md:h-96 lg:h-[30rem] flex items-center justify-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto text-center">
     
        <h1 className="relative text-white text-2xl mt-20 md:text-3xl font-semibold">
          {title}
        </h1>
        </div>
      
    </header>
  );
};

export default Header;
