import CountdownTimer from './CountdownTimer';
import { useScholarshipStore } from '../state/scholarshipStore';
import heroImage from '../assets/heroImage1.png'; // Adjust path if needed
import heroImage2 from '../assets/heroImage2.png'; // Adjust path if needed

const HeroSection = () => {
  const { data } = useScholarshipStore();

  if (!data) return null;

  const startDate = new Date(data.scholarship_start_date);
  const endDate = new Date(data.application_end_date);
  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

  return (
    <section className='relative overflow-hidden bg-white min-h-screen flex items-center px-6 sm:px-10 lg:px-36 xl:px-24 py-12'>
      <div className='max-w-7xl z-10 w-full mx-auto flex flex-col lg:flex-row items-start gap-10'>
        <div className='flex-1 space-y-6 relative'>
          {/* Background Hero Image Behind Title */}
          <img
            src={heroImage}
            alt='Hero background'
            className='absolute left-45 top-0 w-[260px] sm:w-[300px] lg:w-[206px] rotate-20 opacity-10 pointer-events-none select-none'
            style={{ transform: 'translate(-20%, -20%)' }}
          />

          {/* Title */}
          <div className='relative z-10'>
            <h1 className='text-[40px] leading-tight font-semibold text-[#685DC5]'>
              {data.name}
            </h1>
          </div>

          {/* Subheading */}
          <h2 className='text-lg font-semibold text-gray-800 max-w-md z-10 relative'>
            A fully funded work–study program to launch your tech career
          </h2>

          {/* Description */}
          <p className='text-gray-700 max-w-[440px] leading-relaxed z-10 relative'>
            {data.description[0]?.data}
          </p>

          {/* Position */}
          <p className='text-gray-700 z-10 relative'>
            <span className='font-bold'>Position:</span>{' '}
            {data.position || 'Not specified'}
          </p>

          {/* Button */}
          <button
            onClick={() => console.log('Apply Now clicked')}
            className='mt-4 px-8 py-4 rounded-full bg-[#685DC5] hover:bg-[#4c2ea1] text-white text-sm font-semibold transition z-10 relative'
          >
            Apply Now
          </button>
        </div>

        {/* Right side */}

        <div className='flex-1 space-y-6  bg-white'>
          {/* Powered by */}
          <div className='flex items-center gap-3 '>
            <img
              src='/assets/logo.svg'
              alt='Zeptolab'
              className='w-20 h-auto mr-10'
            />
            <div className='flex-col'>
              <p className='text-gray-500 text-s'>Powered by:</p>
              <p className='font-light text-2xl'>{data.company.name}</p>
            </div>
          </div>

          {/* Countdown box */}
          <div className='border border-gray-300 rounded-md p-4'>
            <p className='text-sm text-[#5C3CAF] font-semibold mb-2'>
              Application closes in
            </p>
            <div className='text-2xl'>
              <CountdownTimer deadline={data.application_end_date} />
            </div>
          </div>

          {/* Location and date info */}
          <div className='border border-gray-300 z-10 rounded-md p-4'>
            <div className='flex flex-col sm:flex-row justify-between gap-6 sm:gap-16'>
              {/* Left column */}
              <div>
                <p className='text-sm font-semibold text-[#5C3CAF]'>Location</p>
                <p className='text-gray-700 text-base'> {data.location.name}</p>

                <p className='mt-10 text-sm font-semibold text-[#5C3CAF]'>
                  Start date
                </p>
                <p className='text-gray-700 text-base'>
                  {formatDate(startDate)}
                </p>
              </div>

              {/* Right column */}
              <div className='mr-25'>
                <p className='text-sm font-semibold text-[#5C3CAF]'>Duration</p>
                <p className='text-gray-700 text-base'>1 Year</p>
                <p className='text-gray-700 text-base'>Full-Time</p>

                <p className='mt-4 text-sm font-semibold text-[#5C3CAF]'>
                  End date
                </p>
                <p className='text-gray-700 text-base'>{formatDate(endDate)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={heroImage2}
        alt='Grid background'
        className='absolute right-30 bottom-20 w-[280px] lg:w-[50%] z-0 pointer-events-none select-none translate-x-1/3 translate-y-1/3'
      />
    </section>
  );
};

export default HeroSection;
