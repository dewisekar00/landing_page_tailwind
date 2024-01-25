import React from 'react';

const Navbar = () => {
  return (
  <div className='m-8'>


    <div className="sm:flex sm:justify-between  bg-black rounded-md text-white  p-4  mx-auto  sm:px-8 mt-6">
      <div className='text-violet-300 font-semibold'>logo</div>
      <nav>
        <ul className="sm:flex gap-8 hidden ">
          <li className="hover:border-b-2">Home</li>
          <li className="hover:border-b-2">Buying</li>
          <li className="hover:border-b-2">Features</li>
          <li className="hover:border-b-2">Contact</li>
        </ul>
      </nav>
      <div className="sm:flex gap-4 hidden">
        <button>log in</button>
        <span>|</span>
        <button>create Account</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
