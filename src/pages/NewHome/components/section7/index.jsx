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
    <section className="h-[351px] mt-[100px] mb-[100px] rounded-[50px] overflow-hidden relative">
      <img src={baseFileUrl + '/images/section7.png'} alt="" />
      <section className="absolute flex flex-col justify-center items-start w-[506px] h-full top-0 left-0  ml-40">
        <section className="text-[50px] font-bold">
          اپلیکیشن بادی نس رو از
          <br />
          اینجا دانلود کن!
        </section>
       
        <button className="bg-purple w-[100px] h-[40px] rounded-full text-white font-semibold self-start mt-5">
          بزن بریم
        </button>
      </section>
    </section>
  );
}
