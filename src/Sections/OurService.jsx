import React from 'react';

const OurService = () => {
  return (
    <>
      <div className="text-center mt-24 mb-24 ">
        <h3 className="text-4xl font-semibold mb-8">Our service</h3>
        <p>
          We offer a full line of advertising products and online marketing service designed <br /> to help real estate professionals connect with interested buyers and sellers
        </p>
      </div>

      <div className="grid grid-cols-12 mb-24 gap-24">
        <div className="col-span-4 ">
          <span className="material-symbols-outlined text-4xl">real_estate_agent</span>
          <h3 className="font-semibold text-2xl mb-4 mt-4">Buy Properties</h3>
          <p>Find your place with an immersive photo experience and the most listings,including things you wont find anywhere else</p>
          <button className="my-4 font-semibold">learn more</button>
        </div>
        <div className="col-span-4 ">
          <span className="material-symbols-outlined text-4xl">home_pin</span>
          <h3 className="font-semibold text-2xl mb-4 mt-4">Sell Properties</h3>
          <p>Find your place with an immersive photo experience and the most listings,including things you wont find anywhere else</p>
          <button className="my-4 font-semibold">learn more</button>
        </div>
        <div className="col-span-4 ">
          <span className="material-symbols-outlined text-4xl">door_front</span>
          <h3 className="font-semibold text-2xl mb-4 mt-4">Rent Properties</h3>
          <p>Find your place with an immersive photo experience and the most listings,including things you wont find anywhere else</p>
          <button className="my-4 font-semibold">learn more</button>
        </div>
      </div>
    </>
  );
};

export default OurService;
