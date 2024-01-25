import React from 'react';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 mt-24 mx-16 ">
      <div className="col-span-6 w-full h-80  ">
        <h1 className="sm:text-5xl font-bold mb-8">
          Find perfect <br />
          place to live life
        </h1>
        <p className="mb-8">
          we'll help you estimate your budget range. <br />
          Save to your buyer profile to help in your search
        </p>
        <div className="bg-black  h-40 rounded-xl text-white p-6 ">
          <div className="mb-4">
            <h3 className="text-2xl ">Believe finding it</h3>
            <p>Search properties for sale and to rent in the USA</p>
          </div>
          <div className="flex gap-2">
            <input type="text" placeholder="Adress,City,Zip" className="py-2 w-80 rounded-lg focus:outline-none  text-black pl-4 font-medium" />

            <div className="flex gap-2 font-bold text-black ">
              <button className="bg-violet-300 py-2 px-5 rounded-md hover:bg-violet-200">For Sale</button>
              <button className=" bg-violet-300 py-2 px-5 rounded-md hover:bg-violet-200">To Rent</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 ml-16">
        <img
          src="https://images.unsplash.com/photo-1503594384566-461fe158e797?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="house"
          className=" w-72 h-96 rounded-t-full object-cover"
        />
      </div>
      <div className="col-span-2 w-full mt-4 flex flex-col">
        <div className="mb-16 ">
          <h3 className="text-3xl  font-semibold mb-2 ">$280</h3>
          <p>Trading Volume</p>
          <hr className="mt-4 w-1/2" />
        </div>
        <div className="mb-16">
          <h3 className="text-3xl  font-semibold mb-2">720k</h3>
          <p>our properties</p>
          <hr className="mt-4  w-1/2" />
        </div>
        <div className="mb-16">
          <h3 className="text-3xl  font-semibold mb-2">1.5M</h3>
          <p>Total Users</p>
          <hr className="mt-4  w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
