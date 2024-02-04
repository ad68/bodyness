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
    <section className="rounded-[50px] mt-[100px] h-[550px] relative p-1">
      <img src={baseFileUrl + '/images/section4.png'} alt="" />
      <section className="w-[100%]  rounded-[50px] absolute flex flex-col justify-start mt-32 items-center top-0 left-0 z-1">
        <h4 className="text-[55px] font-semibold text-white">تمرینات ورزشی</h4>
        <span className="text-[19px] font-normal text-white mt-2">
          بادینس ، مسیری هوشمند برای سبک زندگی بهتر
        </span>
        <section className="w-[289px] h-[44px] flex justify-between">
          <button className="bg-white w-[118px] h-[44px] rounded-full font-semibold  text-purple mt-10">
            بزن بریم
          </button>
          <button className="bg-purple w-[141px] h-[44px] rounded-full font-semibold  border text-white mt-10">
            انتخاب مربی
          </button>
        </section>
      </section>
    </section>
  );
}
