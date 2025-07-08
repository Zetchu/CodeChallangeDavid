import CountdownTimer from './CountdownTimer';
import { useScholarshipStore } from '../state/scholarshipStore';
import heroImage from '../assets/heroImage1.png';
import heroImage2 from '../assets/heroGird.svg';
import zeptoLogo from '../assets/logo.svg';

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
    <section className='relative overflow-hidden bg-white px-6 sm:px-10 lg:px-36 xl:px-24 py-16 mt-20 lg:mt-0  min-h-screen'>
      <img
        src={heroImage2}
        alt='Grid background'
        className='absolute bottom-10 right-0 ml-20 lg:w-[43%]  hidden md:block pointer-events-none select-none z-0'
      />

      <div className='max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] relative z-10'>
        {/* Left Column */}
        <img
          src={heroImage}
          alt='Hero design'
          className='absolute top-[-5%] left-[25%] lg:top-[15%] lg:left-[15%]   w-40 sm:w-40 lg:w-60 opacity-10 rotate-[20deg] pointer-events-none select-none z-0'
        />
        <div className='space-y-6'>
          <h1 className='text-3xl lg:text-[50px] leading-tight font-semibold text-[#685DC5]'>
            {data.name}
          </h1>
          <h2 className='text-lg font-semibold text-gray-800 max-w-md'>
            A fully funded work–study program to launch your tech career
          </h2>
          <p className='text-gray-700 max-w-[440px] leading-relaxed'>
            {data.description[0]?.data}
          </p>
          <p className='text-gray-700'>
            <span className='font-bold'>Position:</span>{' '}
            {data.position || 'Not specified'}
          </p>
          <button
            onClick={() => console.log('Apply Now clicked')}
            className='mt-4 px-8 py-4 rounded-full bg-[#685DC5] hover:bg-[#4c2ea1] text-white text-sm font-semibold transition'
          >
            Apply Now
          </button>
        </div>

        {/* Right Column */}
        <div className='space-y-6'>
          <div className='flex items-center gap-4'>
            <img
              src={zeptoLogo}
              alt='Zeptolab'
              className='w-20 h-auto'
            />
            <div>
              <p className='text-gray-500 text-sm'>Powered by:</p>
              <p className='font-light text-2xl'>{data.company.name}</p>
            </div>
          </div>

          <div className='border border-gray-300 rounded-md p-10'>
            <p className='text-sm text-[#5C3CAF] font-semibold mb-2'>
              Application closes in
            </p>
            <div className='text-2xl'>
              <CountdownTimer deadline={data.application_end_date} />
            </div>
          </div>

          <div className='border border-gray-300 rounded-md p-10 bg-white'>
            <div className='grid grid-cols-2 gap-x-10 gap-y-4'>
              <div>
                <p className='text-sm font-semibold text-[#5C3CAF]'>Location</p>
                <p className='text-gray-700 text-base'>{data.location.name}</p>
              </div>
              <div>
                <p className='text-sm font-semibold text-[#5C3CAF]'>Duration</p>
                <p className='text-gray-700 text-base'>1 Year</p>
                <p className='text-gray-700 text-base'>Full-Time</p>
              </div>
              <div>
                <p className='text-sm font-semibold text-[#5C3CAF] mt-2'>
                  Start date
                </p>
                <p className='text-gray-700 text-base'>
                  {formatDate(startDate)}
                </p>
              </div>
              <div>
                <p className='text-sm font-semibold text-[#5C3CAF] mt-2'>
                  End date
                </p>
                <p className='text-gray-700 text-base'>{formatDate(endDate)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
