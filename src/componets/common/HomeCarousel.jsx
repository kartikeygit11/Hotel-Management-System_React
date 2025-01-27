import { useState, useEffect } from 'react';
// Assuming images are already imported like this
import home1 from '../assests/coverimg.webp';
import home2 from '../assests/ambiance.jpg';
import home3 from '../assests/home3.jpg';
import home4 from '../assests/home4.jpg';
import home5 from '../assests/services4.jpg';

const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [home1, home2, home3, home4, home5];

  // Auto-play feature: Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [activeIndex, slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper with height adjustments */}
      <div className="relative h-[50vh] overflow-hidden rounded-lg md:h-[60vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            data-carousel-item
          >
            <img
              src={slide}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-current={activeIndex === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-700/10 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-700/10 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default HomeCarousel;
