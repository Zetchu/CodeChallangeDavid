import hamburgerIcon from '../assets/hamburger.svg';

const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 w-full bg-[#685DC5] text-white px-6 py-4 flex justify-between items-center z-50'>
      <div className='text-sm font-bold'>
        HARBOUR.SPACE <span className='font-normal'>/INTERACTION DESIGN</span>
      </div>

      <div className='relative'>
        <button
          className='w-20 h-20  lg:display-block bg-green-500 text-white font-bold rounded-full text-xs hover:bg-green-600 transition shadow-lg
                     hidden lg:flex items-center justify-center absolute -top-2 right-20'
        >
          APPLY
          <br />
          NOW
        </button>
        <img
          src={hamburgerIcon}
          alt='Menu'
          className='w-10 h-10 cursor-pointer'
        />
      </div>
    </nav>
  );
};

export default Navbar;
