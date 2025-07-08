import { useScholarshipStore } from '../state/scholarshipStore';
import CountdownTimer from './CountdownTimer';

const StickyBottomBar = () => {
  const { data } = useScholarshipStore();

  if (!data) return null;
  const formattedStartDate = new Date(data.scholarship_start_date)
    .toISOString()
    .slice(0, 10);
  const formattedEndDate = new Date(data.application_end_date)
    .toISOString()
    .slice(0, 10);
  return (
    <div className='fixed hidden lg:block bottom-0 left-0 w-full bg-white z-50 '>
      <div className='max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6'>
        {/* Content */}
        <div className='flex flex-wrap gap-6 text-sm text-gray-800'>
          <div>
            <div className='font-semibold'>{data.company.name}</div>
            <div className='text-gray-500'>{data.name}</div>
          </div>

          <div>
            <div className='font-semibold'>Location</div>
            <div className='text-gray-500'>{data.location.name}</div>
          </div>

          <div>
            <div className='font-semibold'>Duration</div>
            <div className='text-gray-500'>{data.duration} Year Full-Time</div>
          </div>

          <div>
            <div className='font-semibold'>Start date</div>
            <div className='text-gray-500'>{formattedStartDate}</div>
          </div>

          <div>
            <div className='font-semibold'>Application deadline</div>
            <div className='text-gray-500'>{formattedEndDate}</div>
          </div>

          <div>
            <div className='font-semibold'>Application closes in</div>
            <div className='text-gray-500'>
              <CountdownTimer deadline={data.application_end_date} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomBar;
