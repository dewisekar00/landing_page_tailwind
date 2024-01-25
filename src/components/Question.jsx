import React, { useState } from 'react';

const Question = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  function onToggle() {
    setShow(!show);
  }

  return (
    <div className="mt-8">
      <div className="flex gap-4 justify-center mt-8">
        <p className="font-semibold">{question}</p>
        {/* add di klik maka berubah jadi - dan munclin component di bawah  code button */}
        <button onClick={onToggle}>{show ? <span class="material-symbols-outlined">keyboard_arrow_up</span> : <span class="material-symbols-outlined">keyboard_arrow_down</span>}</button>
        {/* disini muncul komponent baru */}
      </div>
      {show && <div className="flex justify-center ">{answer}</div>}
      <hr className="border-black h-px w-96 my-4 mx-auto " />
    </div>
  );
};

export default Question;

/* + di klik maka berubah jadi -   = berarti pake operator ternyary 
  
  dan munclin component di bawah  code button */

/* muncul komponent baru */



