import React, { useState, useContext, useEffect } from 'react';
import { baseFileUrl } from '../../../../config';
import { Link } from 'react-router-dom';
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
      <section className="mr-[111px]">
        <section className="text-[60px] font-semibold">
          سـلامت سنــج و
          <br />
          محاسبه گرها
        </section>
        <Link to="/roadmap/section3">
          <button className="bg-purple w-[100px] h-[40px] rounded-full font-semibold  text-white mt-10">
            بزن بریم
          </button>
        </Link>
      </section>
      <img
        src={baseFileUrl + '/images/heart.png'}
        className="w-[658px] h-[602px] ml-10"
        alt=""
      />
    </section>
  );
}
