import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import gridBg from '../assets/gridBackground.svg';
import ireneImg from '../assets/image.png';
import linkedInLogo from '../assets/linkedInLogo.svg';

const dummyTestimonials = [
  {
    name: 'Irene Pereyra',
    role: 'Interaction Design Fellow ’19',
    quote:
      'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experience offered through the program.',
    education: 'B.A. Visual Design',
    image: ireneImg, // Replace with your local image or a placeholder
  },
  {
    name: 'John Smith',
    role: 'Data Science Fellow ’20',
    quote:
      'The mentorship and industry exposure helped me build real skills while earning a degree. It was a transformative experience.',
    education: 'B.Sc. Computer Science',
    image: ireneImg,
  },
  {
    name: 'Sophia Lee',
    role: 'Cybersecurity Fellow ’21',
    quote:
      'I found a strong community and hands-on projects that made learning exciting. This program set the foundation for my career.',
    education: 'M.Sc. Information Security',
    image: ireneImg,
  },
];

const TestimonialCarousel = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
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
    <section className='relative bg-white px-6 py-20 lg:px-36 overflow-hidden'>
      <img
        src={gridBg}
        alt='Grid Background'
        className='absolute top-0 left-1/2 transform -translate-x-1/2 w-[58%] max-w-none  z-0 pointer-events-none'
      />

      <div
        ref={sliderRef}
        className='keen-slider'
      >
        {dummyTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className='keen-slider__slide bg-gray-300 border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col justify-between max-w-md'
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
            <p className='text-gray-700 text-lg font-light leading-relaxed px-16 py-8'>
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
