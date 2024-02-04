import React, { useState, useContext, useEffect } from 'react';
import { baseFileUrl } from '../../../../../config';

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
    <section className="w-[220px] h-[254px] bg-white rounded-[16px] p-1">
      <img
        src={baseFileUrl + '/images/tinyPlate.png'}
        className="m-auto mt-[-75px]"
        alt=""
      />
      <span className="block text-center font-bold text-[16px] mt-[-10px]">
        سالاد تخم مرغ
      </span>
      <section className="w-[156px] h-[37px] flex justify-between  mx-auto mt-4">
        <section className="self-center text-[14px] text-right">
          <img
            src={baseFileUrl + '/images/icons/clock.png'}
            className="w-[16px] h-[16px] inline-block"
            alt=""
          />
          <span className="mr-2">20 - 12</span>
          <section className="text-[#3E4151]">دقیقه</section>
        </section>
        <span className="inline-block w-[2px] h[25px] bg-[#E6E8E9]"></span>
        <section className="self-center text-[14px] w-[60px] text-left">
          <img
            src={baseFileUrl + '/images/icons/muscleIcon.png'}
            className="w-[16px] h-[16px] inline-block"
            alt=""
          />
          <span className="mr-2">67</span>
          <section className="text-[#3E4151]">مصرفی</section>
        </section>
      </section>
      <section className="w-[191px] h-[77px] rounded-[14px] border border-[#E6E8E9] mx-auto mt-3 flex justify-around p-1">
        <section className="flex flex-col justify-around items-center w-[49px]">
          <span className="text-[11px] font-semibold text-[#0097C1]">
            کربوهیدرات
          </span>
          <img
            src={baseFileUrl + '/images/chart1.png'}
            className="w-[39px] h-[39px]"
            alt=""
          />
        </section>
        <span className="inline-block w-[2px] h[45px] bg-[#E6E8E9]"></span>
        <section className="flex flex-col justify-around items-center w-[49px]">
          <span className="text-[11px] font-semibold text-[#F02484]">چربی</span>
          <img
            src={baseFileUrl + '/images/chart2.png'}
            className="w-[39px] h-[39px]"
            alt=""
          />
        </section>
        <span className="inline-block w-[2px] h[45px] bg-[#E6E8E9]"></span>
        <section className="flex flex-col justify-around items-center w-[49px]">
          <span className="text-[11px] font-semibold text-[#7639BA]">
            پروتئین
          </span>
          <img
            src={baseFileUrl + '/images/chart3.png'}
            className="w-[39px] h-[39px]"
            alt=""
          />
        </section>
      </section>
    </section>
  );
}
