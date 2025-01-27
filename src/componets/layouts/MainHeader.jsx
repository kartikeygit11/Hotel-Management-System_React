import React from 'react'

const MainHeader = () => {
    return (
        <header className="relative bg-cover bg-center h-64 md:h-96 flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-banner-image.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative text-center text-white z-10 px-4 md:px-0">
            <h1 className="text-3xl md:text-5xl font-bold">
              Welcome to <span className="text-purple-600">lakeSide Hotel</span>
            </h1>
            <h4 className="text-lg md:text-2xl mt-2">Experience the Best Hospitality in Town</h4>
          </div>
        </header>
      );
      
}

export default MainHeader