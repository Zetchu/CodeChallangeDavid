// src/components/Navbar.tsx
// src/components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 w-full bg-[#6C63FF] text-white px-6 py-4 flex justify-between items-center z-50'>
      <div className='text-sm font-bold'>
        HARBOUR.SPACE <span className='font-normal'>/INTERACTION DESIGN</span>
      </div>

      <button className='bg-green-500 text-white font-bold rounded-full px-5 py-2 text-xs hover:bg-green-600 transition'>
        APPLY NOW
      </button>
    </nav>
  );
};

export default Navbar;
