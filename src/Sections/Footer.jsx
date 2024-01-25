import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black p-8">
      <div className=" ">
        <div className="bg-Grey rounded-2xl p-8 w-full flex justify-between">
          <h3 className=" text-2xl text-white">Subscribe to our newsletters</h3>
          <div className=" flex gap-4">
            <input type="text" placeholder="Enter your email" className=" rounded-lg border-2 border-violet-300 placeholder:text-white text-white bg-transparent py-2 w-80 pl-3 focus:outline-none" />
            <button className="bg-violet-300 rounded-lg py-2 px-6 font-semibold hover:bg-violet-200">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 gap-8 mt-8 h-80 mb-14">
          <div className="col-span-3 bg-Grey rounded-lg p-8">
            <h5 className="font-bold text-violet-400 mb-2">Logo brand</h5>
            <p className="text-white mb-8 text-sm">we believe that buying or selling a home is more than just a transaction its a life changing experience</p>

            <div>
              <p className="text-white mt-16">Follow Media</p>
              <hr className="mt-2" />
              <img src="logo.png" alt="" srcset="" />
            </div>
          </div>

          <div className="col-span-9 bg-Grey rounded-lg flex gap-16 p-16 text-slate-200">
            <div >
              <h3 className='font-bold mb-4 text-white'>About us</h3>
              <ul>
                <li className='py-2'>about</li>
                <li className='py-2'>Agent VS us</li>
                <li className='py-2'>Find an Appraiser</li>
                <li className='py-2'>Commercial Service</li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold mb-4 text-white'>Quick Links</h3>
              <ul >
                <li className='py-2'>Buying Home</li>
                <li className='py-2'>Renting Home</li>
                <li className='py-2'>Selling Home</li>
                <li className='py-2'>Feauture</li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold mb-4 text-white'>Join us</h3>
              <ul >
                <li className='py-2'>Become an Agent</li>
                <li className='py-2'>Get referrrals</li>
                <li className='py-2'>Home Loans</li>
                <li className='py-2'>Help center</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
