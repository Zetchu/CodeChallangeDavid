import { useScholarshipStore } from '../state/scholarshipStore';

function AboutCards() {
  const { data } = useScholarshipStore();
  return (
    <section className='px-6 py-10 lg:px-36'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Card 1  */}
        <div className='md:border md:border-gray-300 p-6 rounded-md md:row-span-3'>
          <p className='text-sm font-semibold text-[#685DC5]'>
            Fellowship value
          </p>
          <p className='text-3xl font-light mt-2 mb-10 md:mb-46.5'>
            €{data?.total_value}
          </p>
          <hr className='hidden md:flex my-4 border-gray-300' />
          <div className='text-sm text-gray-700 mt-2  md:mx-8 space-y-3'>
            <div className='flex justify-between text-lg  gap-6 flex-wrap'>
              <div>
                <p className='font-medium text-[#685DC5]'>Tuition covered</p>
                <p>€{data?.tuition}</p>
              </div>
              <div>
                <p className='font-medium  text-[#685DC5]'>Remaining</p>
                <p>€{data?.remaining}</p>
              </div>
            </div>
            <div className='text-lg'>
              <p className='font-medium mt-10 text-[#685DC5]'>Living stipend</p>
              <p>€8,400 (€700/month)</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='border border-gray-300 p-6 rounded-md col-span-3 md:col-span-1 '>
          <p className='text-sm font-semibold text-[#685DC5]'>
            Study commitment
          </p>
          <p className='text-lg font-light mt-2'>
            {data?.study_commitment} hours / day
          </p>
          <hr className='my-4 w-6 border-gray-300' />
          <p className='text-sm text-gray-700'>{data?.study_commitment_text}</p>
        </div>

        {/* Card 3 */}
        <div className='border border-gray-300 p-6 rounded-md col-span-3 md:col-span-1'>
          <p className='text-sm font-semibold text-[#685DC5]'>
            Work commitment
          </p>
          <p className='text-lg font-light mt-2'>
            {data?.internship_commitment} hours / day
          </p>
          <hr className='my-4 w-6 border-gray-300' />
          <p className='text-sm text-gray-700'>
            {data?.internship_commitment_text}
          </p>
        </div>

        {/* Graduation Divider */}
        <div className='col-span-2 flex items-center justify-center my-2'>
          <div className='border-t border-gray-300 w-full relative'>
            <span className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4 text-sm font-semibold text-gray-600'>
              GRADUATION
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className='border border-gray-300 p-6 rounded-md col-span-3 md:col-start-2'>
          <p className='text-sm font-semibold text-[#685DC5]'>
            A full-time contract
          </p>
          <p className='text-lg font-light mt-2'>
            {data?.duration} Year / Full-Time
          </p>
          <hr className='my-4 w-6 border-gray-300' />
          <p className='text-sm text-gray-700'>
            You’ll be guaranteed a {data?.duration} year contract with SCG upon
            graduation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutCards;
