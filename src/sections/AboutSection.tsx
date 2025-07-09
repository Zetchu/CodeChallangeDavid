import { useScholarshipStore } from '../state/scholarshipStore';
import aboutImage from '../assets/aboutImage1.png';
import aboutBackground from '../assets/aboutBackground.svg';

const AboutSection = () => {
  const { data } = useScholarshipStore();

  if (!data) return null;

  return (
    <section className='bg-white px-6 py-20 lg:px-36 flex flex-col lg:flex-row items-center gap-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        <div className='relative flex justify-center items-center w-full'>
          <img
            src={aboutBackground}
            alt='Background pattern'
            className='absolute w-[65%] h-auto z-0 object-contain'
          />

          <div className='w-[60%] aspect-square rounded-full overflow-hidden border-4 border-gray-200 z-10'>
            <img
              src={aboutImage}
              alt='About visual'
              className='object-cover w-full h-full'
            />
          </div>
        </div>

        <div className='flex-1 text-center  lg:text-left mt-8'>
          <h2 className='text-[45px] lg:w-[50%]  text-[#685DC5] mb-4'>
            About the apprenticeship
          </h2>
          <p className='text-gray-700 font-light text-xl leading-relaxed max-w-xl mx-auto lg:mx-0'>
            {data.about[0].data}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
