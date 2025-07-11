import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import gridBg from '../assets/gridBackground.svg';
import { motion } from 'framer-motion';
import linkedInLogo from '../assets/linkedInlogo.svg';
import { dummyTestimonials } from '../constants/dummyTestimonials';
import { useCursorStore } from '../state/cursorStore';

const TestimonialCarousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.5, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 2.5, spacing: 32 },
      },
    },
  });

  return (
    <section
      className='relative bg-white px-6 py-20 mt-30 mb-4 lg:mb-4  overflow-hidden cursor-none'
      onMouseEnter={() => {
        useCursorStore.getState().setActive(true);
        useCursorStore.getState().setText('Drag');
      }}
      onMouseLeave={() => {
        useCursorStore.getState().setActive(false);
        useCursorStore.getState().setText('');
      }}
    >
      <img
        src={gridBg}
        alt='Grid Background'
        className='absolute top-0 left-1/2  -translate-x-1/2 w-[100%] md:w-[68%]  max-w-none  z-0 pointer-events-none'
      />

      <div
        ref={sliderRef}
        className='keen-slider'
      >
        {dummyTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className='keen-slider__slide bg-[#fbfbfb]  border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col justify-between max-w-md'
          >
            {/* Header */}
            <div className='flex items-start justify-between bg-white px-6 py-8'>
              <div className='flex items-center gap-3'>
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full object-cover'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    delay: 0.2 * index,
                  }}
                />
                <div>
                  <p className='text-sm font-medium text-gray-800'>
                    {testimonial.name}
                  </p>
                  <p className='text-xs font-light text-gray-500'>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <img
                src={linkedInLogo}
                alt='LinkedIn'
                className='w-5 h-5 object-contain self-center'
              />
            </div>

            <p className='text-gray-700 text-lg font-light leading-relaxed px-16 py-16'>
              {testimonial.quote}
            </p>

            <p className='text-xs text-gray-500 px-16 pb-10 '>
              Education &nbsp;&bull;&nbsp; {testimonial.education}
            </p>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className='flex justify-end gap-4 mt-6  lg:mt-0 lg:block'>
        <button
          onClick={() => instanceRef.current?.prev()}
          className='lg:absolute lg:left-10 lg:top-1/2 lg:-translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white text-gray-600 text-xl rounded-full border border-gray-200 hover:bg-gray-100'
          aria-label='Previous slide'
        >
          ‹
        </button>

        <button
          onClick={() => instanceRef.current?.next()}
          className='lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white text-gray-600 text-xl rounded-full border border-gray-200 hover:bg-gray-100'
          aria-label='Next slide'
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
