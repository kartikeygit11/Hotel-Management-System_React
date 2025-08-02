import { useState, useEffect } from "react";
import home1 from "../assests/coverimg.webp";
import home2 from "../assests/ambiance.jpg";
import home3 from "../assests/home3.jpg";
import home4 from "../assests/home4.jpg";
import home5 from "../assests/services4.jpg";

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [home1, home2, home3, home4, home5];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => setActiveIndex(index);

  return (
    <div id="default-carousel" className="relative w-full h-screen overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />

            {/* Overlay text inside each slide */}
            {activeIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Experience the Best Hospitality at{" "}
                  <span className="text-purple-500">Paradise Grove Inn</span>
                </h1>
                <h3 className="text-lg md:text-xl text-gray-300 mt-3">
                  We offer the best services for all your needs.
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        onClick={handlePrev}
      >
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        onClick={handleNext}
      >
        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default HomeCarousel;
