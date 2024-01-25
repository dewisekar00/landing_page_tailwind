import React from 'react';

const Card = ({ imgURL, addres, price }) => {
  return (
    <div className="col-span-3  border-2 w-72 h-128 rounded-xl">
      <img src={imgURL} alt="house one" className="object-cover p-4 rounded-3xl w-full h-72" />
      <div className="flex justify-between p-4 font-bold">
        <h2>{addres}</h2>
        <h2>{price}</h2>
      </div>
      {/* icon */}
      <div className="flex justify-center  p-4 gap-4">
        <div>
          <span className="material-symbols-outlined border-2  text-3xl px-3 py-2 rounded-full bg-violet-100 text-violet-300">home</span>
          <p className="text-sm text-center mr-2 "> single Family</p>
        </div>
        <div>
          <span className="material-symbols-outlined border-2  text-3xl px-3 py-2 rounded-full bg-violet-100 text-violet-300">king_bed</span>
          <p className="text-sm text-center">Multi family</p>
        </div>
        <div>
          <span className="material-symbols-outlined border-2  text-3xl px-3 py-2 rounded-full bg-violet-100 text-violet-300">bathtub</span>
          <p className="text-sm text-center">single</p>
        </div>
      </div>
      <div className="p-4 flex justify-center ">
        <button className="w-full h-10 font-semibold rounded-lg border-2 border-violet-300 text-violet-400 hover:bg-violet-300 hover:text-black ">More Detail</button>
      </div>
    </div>
  );
};

export default Card;
