import React from 'react';

const CardTestimonial = ({ text, imgUrl, clientName, addition }) => {
  return (
    <div className="w-1/2 h-124 bg-slate-100 rounded-lg ">
      <div>
        <p className=" text-slate-500 text-lg p-8 text-wrap  text-start h-64 w-full">"{text}"</p>
      </div>
      <div className="px-4  mt-[-20px] ">
        <img src={imgUrl} alt="pic" className="w-32 h-44 object-cover rounded-full ml-auto  " />
        <h2 className="font-semibold">{clientName}</h2>
        <p className="text-slate-600">{addition}</p>
      </div>
    </div>
  );
};

export default CardTestimonial;
