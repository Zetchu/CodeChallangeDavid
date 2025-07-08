import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import gridBg from '../assets/gridBackground.svg';

import linkedInLogo from '../assets/linkedInLogo.svg';
import { dummyTestimonials } from '../constants/dummyTestimonials';

const TestimonialCarousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1.2,
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
    <section className='relative bg-white px-6 py-20 mt-30  overflow-hidden'>
      <img
        src={gridBg}
        alt='Grid Background'
        className='absolute top-0 left-1/2  -translate-x-1/2 w-[68%]  max-w-none  z-0 pointer-events-none'
      />

      <button
        onClick={() => instanceRef.current?.prev()}
        className='absolute left-10 border-1 border-gray-200 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white text-gray-600 text-xl rounded-full  hover:bg-gray-100'
        aria-label='Previous slide'
      >
        ‹
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className='absolute right-10 top-1/2 border-1  border-gray-200 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white text-gray-600 text-xl rounded-full  hover:bg-gray-100'
        aria-label='Next slide'
      >
        ›
      </button>

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
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full object-cover'
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

            {/* Quote */}
            <p className='text-gray-700 text-lg font-light leading-relaxed px-16 py-16'>
              {testimonial.quote}
            </p>

            {/* Education */}
            <p className='text-xs text-gray-500 px-16 pb-10 '>
              Education &nbsp;&bull;&nbsp; {testimonial.education}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
