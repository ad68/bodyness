import React, { useState, useContext, useEffect } from 'react';
import Plus from '../../../../../assets/images/basicInfo/plus.png';
import Minus from '../../../../../assets/images/basicInfo/minus.png';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [weight, setWeight] = useState(65);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const increaseWeight = () => {
    if (weight <= 250) setWeight(weight + 1);
  };
  const decreaseWeight = () => {if (weight > 35) {setWeight(weight - 1)}};

  
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="w-[294px] h-[48px] flex justify-center items-center bg-[#F4F4F496] rounded-[12px] mt-4 justify-around">
      <img
        alt=""
        src={Plus}
        className="h-[19px] w-[19px] cursor-pointer"
        onClick={increaseWeight}
      />
      <section className="flex justify-center items-center">
        <span className="text-[30px] font-bold">{weight}</span>
        <span className="text-[12px] font-normal mr-2">کیلوگرم</span>
      </section>
      <section  onClick={decreaseWeight} className="w-[19px] h-[19px] cursor-pointer flex justify-center items-center">
        <img
          alt=""
          src={Minus}
          className="w-[19px] "
         
        />
      </section>
    </section>
  );
}
