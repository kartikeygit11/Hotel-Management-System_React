import React from 'react';
import heroImage from '../assests/coverimg.webp';
import room1Image from '../assests/delux.jpg'; 
import room2Image from '../assests/suite.jpg';
import room3Image from '../assests/standard.jpg';
import ambianceImage from '../assests/ambiance.jpg'; 

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div 
        className="bg-cover bg-center h-64 md:h-80 lg:h-96 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-black bg-opacity-30 p-4">About Hotel Grove Inn</h1>
      </div>
      
      {/* About Section */}
      <section className="px-6 py-8 md:px-12 lg:px-24 max-w-6xl mx-auto text-center">
       
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Nestled in the heart of the city, Hotel Grove Inn combines elegance with comfort to create an unforgettable stay for our guests. Our hotel is designed with modern aesthetics and a touch of local charm to make you feel at home, whether you're here for business or leisure.
        </p>
      </section>

      {/* Rooms Section */}
      <section className="px-6 py-8 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Room 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src={room1Image} alt="Deluxe Room" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Deluxe Room</h3>
              <p className="text-gray-600">Spacious and elegant, our Deluxe Rooms offer the perfect blend of comfort and luxury.</p>
            </div>
          </div>

          {/* Room 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src={room2Image} alt="Suite Room" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Suite Room</h3>
              <p className="text-gray-600">Our Suite Rooms provide a spacious living area and exquisite decor, ideal for longer stays.</p>
            </div>
          </div>

          {/* Room 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src={room3Image} alt="Standard Room" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Standard Room</h3>
              <p className="text-gray-600">The perfect choice for a comfortable and budget-friendly stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section className="px-6 py-8 md:px-12 lg:px-24 max-w-6xl mx-auto text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Experience Our Ambiance</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
          At Hotel Grove Inn, every corner is thoughtfully designed to immerse you in a warm and welcoming atmosphere. Relax in our beautifully landscaped gardens, enjoy a quiet evening in our cozy lounge, or unwind by the poolside.
        </p>
        <img className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg" src={ambianceImage} alt="Hotel Ambiance" />
      </section>
      
      {/* CTA Section */}
     
    </div>
  );
};

export default AboutUs;
