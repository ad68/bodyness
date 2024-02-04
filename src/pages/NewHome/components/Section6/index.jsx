import React, { useState, useContext, useEffect } from 'react';
import { baseFileUrl } from '../../../../config';
import FoodBox from './components/FoodBox';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="relative h-[678px] mt-[100px] rounded-[50px]">
      <img src={baseFileUrl + '/images/section6.png'} alt="" />
      <section className="w-full h-full absolute flex flex-col justify-center items-center top-0 left-0 rounded-[50px]">
        <h3 className="text-white text-[40px] font-semibold">
          کلی پیشنهاد غذایی اینجاست
        </h3>
        <p className="text-white text-[22px]">
          انواع صبحانه ، نهار، شام ، وعده های قبل و بعد از تمرین به همراه میزان
          کالری و درشت مغذی هاش
        </p>
        <button className="bg-white w-[118px] h-[44px] font-semibold rounded-full text-purple mt-10">
          بزن بریم
        </button>
        <section className="mt-32 flex justify-between w-[958px]">
          <FoodBox />
          <FoodBox />
          <FoodBox />
          <FoodBox />
        </section>
      </section>
    </section>
  );
}
