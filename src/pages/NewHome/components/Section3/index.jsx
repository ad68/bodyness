import React, { useState, useContext, useEffect } from 'react';
import { baseFileUrl } from '../../../../config';
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
    <section className="section3New grid grid-cols-2 gap-12 justify-center items-center px-[79px] py-[50px]">
      <section className="self-start mt-10">
        <section className="text-[55px] font-semibold">
          مرجع تخصصی آموزش حرکات فیتنس و بدنسازی
        </section>
        <p className="font-normal text-[22px] mt-5">
        بهترین و متناسبترین آموزش‌های تخصصی مناسب با اندامت رو با چند کلیک ساده دریافت کن!
        </p>
        <button className="bg-purple w-[100px] h-[40px] rounded-full font-semibold  text-white mt-10">
          بزن بریم
        </button>
      </section>
      <section>
        <img src={baseFileUrl+"/images/slider.png"} className='mr-10 w-[622px] h-[560px]' alt=''/>
      </section>
     
    </section>
  );
}
