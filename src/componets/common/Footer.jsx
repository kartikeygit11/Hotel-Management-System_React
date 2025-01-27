import React from 'react';
import logo1 from '../assests/footer.png';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
            <img src={logo1} alt="Hotel Grove Inn Logo" className="w-20 h-20  " />

              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Hotel Grove Inn
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-5 sm:grid-cols-3">
           
              <a href='/'><h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white hover:underline">
                Home
              </h2></a>
              
           <div>
              <a href ='/rooms'><h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white hover:underline">
                Rooms
            </h2></a>
            </div>
            <div>
              <a href='/about-us'><h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white hover:underline">
                About Us
              </h2></a>
            
              
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social icons code goes here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
