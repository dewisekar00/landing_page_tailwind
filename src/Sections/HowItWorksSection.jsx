import React from 'react';

const HowItWorksSection = () => {
  return (
    <div className="">
      <div className="flex justify-between mb-32 ">
        <h2 className="text-5xl font-semibold">How it works</h2>
        <p>
          How does the real estate industry work?
          <br /> The real estate industry works because the value of real estate tends to rise
        </p>
      </div>
      <div className="grid grid-cols-12  gap-16">
        <div className="col-span-4">
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-4">1.Search Property Type</h2>
            <p>Typically the purpose of a life estate deed is to provide for the transfer of the property to the desired person</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2.Select best choice</h2>
            <p>Typically the purpose of a life estate deed is to provide for the transfer of the property to the desired person</p>
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-64  h-full  object-cover rounded-t-full"
          />
        </div>
        <div className="col-span-4">
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-4">3.Select your price</h2>
            <p>Typically the purpose of a life estate deed is to provide for the transfer of the property to the desired person</p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4.Make easy payment</h2>
            <p>Typically the purpose of a life estate deed is to provide for the transfer of the property to the desired person</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
