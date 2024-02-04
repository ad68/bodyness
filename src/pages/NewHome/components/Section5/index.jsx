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
    <section className="section5New flex justify-between items-center">
      <section className='mr-[111px]'>
        <section className="text-[60px] font-semibold">
          سـلامت سنــج و
          <br />
          محاسبه گرها
        </section>

        <button className="bg-purple w-[100px] h-[40px] rounded-full font-semibold  text-white mt-10">
          بزن بریم
        </button>
      </section>
      <img
        src={baseFileUrl + '/images/heart.png'}
        className="w-[658px] h-[602px] ml-10"
        alt=""
      />
    </section>
  );
}
