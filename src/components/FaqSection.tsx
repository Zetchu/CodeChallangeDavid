import { useState } from 'react';
import { useScholarshipStore } from '../state/scholarshipStore';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { data } = useScholarshipStore();

  if (!data) return null;

  const filteredFaqs =
    selectedCategory === 'All'
      ? data.faqs.items
      : data.faqs.items.filter((faq) => faq.type === selectedCategory);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className='px-6 py-20 lg:px-36 bg-white'>
      <div className='flex items-center justify-between flex-wrap md:flex-nowrap mb-6'>
        <h2 className='text-3xl text-[#685DC5] mb-4 md:mb-0'>
          Frequently asked <br /> questions
        </h2>

        <div className='flex items-center gap-2'>
          <span className='text-sm text-gray-500'>Filter by:</span>
          <div className='relative inline-block'>
            <select
              className='appearance-none px-4 py-2 pr-10 text-sm border border-[#E6E8EC] text-[#685DC5] rounded-full focus:outline-none'
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value='All'>All</option>
              {[...new Set(data.faqs.items.map((f) => f.type))].map(
                (category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                )
              )}
            </select>

            <div className='pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#685DC5]'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-200 mb-10' />

      <div className='space-y-6'>
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className='border-b border-gray-300 pb-4'
            >
              <div className='flex justify-between items-start'>
                <p className='text-sm text-[#685DC5] font-medium w-1/3'>
                  {faq.type}
                </p>
                <div className='w-2/3'>
                  <button
                    onClick={() => toggle(index)}
                    className='w-full text-left text-base  text-gray-900 flex justify-between items-center'
                  >
                    <span className='w-[60%]'>{faq.question}</span>
                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-full border text-sm ml-4 ${
                        isOpen
                          ? 'bg-[#685DC5] text-white border-[#685DC5]'
                          : 'border-gray-400 text-gray-600'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className='mt-3 text-gray-600 text-sm space-y-2'>
                      {faq.answer.map((para, i) => (
                        <p
                          className='w-[80%]'
                          key={i}
                        >
                          {para.data}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
