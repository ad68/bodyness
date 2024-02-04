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
    <section className="section2New grid grid-cols-2 gap-8 justify-center items-center px-[79px] py-[50px]">
      <img
        src={baseFileUrl + '/images/hero2.png'}
        className="h-[532px] w-[560px]"
        alt=""
      />
      <section className='self-start'>
        <section className="text-[60px] font-semibold">
          بهترین شیوه تناسب اندام چیه؟
        </section>
        <p className="font-normal text-[22px] mt-5">
          داشتن رژیم منعطف یعنی میتونی هر چی دلت خواست بخوری نه هرچقدر دلت
          خواست!
          <br />
          پس حواست به کالری‌ها، درشت مغذی‌ها و میزانش باشه.
        </p>
        <button className="bg-purple w-[100px] h-[40px] rounded-full text-white mt-10 font-semibold">
          بزن بریم
        </button>
      </section>
    </section>
  );
}
