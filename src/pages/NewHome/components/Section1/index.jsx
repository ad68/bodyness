import React, { useState, useContext, useEffect } from 'react'
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
    <section className=" h-[721px] relative bg-heroGr overflow-hidden">
    <section className="container h-full m-auto flex items-center pt-[80px]">
      <img
        src={baseFileUrl + '/images/light.png'}
        alt=""
        className="absolute top-0 "
      />
      <section className="grid grid-cols-2">
        <section className="w-[412px] flex items-center justify-center  text-white z-10 top-0 right-0">
          <section>
            <h3 className="font-semibold text-[59px]">برای زندگیت</h3>
            <h3 className="font-semibold text-[59px]">حرکت کن !</h3>
            <p className="text-[24px] font-normal mt-5">
              بادینس ، مسیری هوشمند برای سبک زندگی بهتر
            </p>
            <section className="mt-10">
              <button className="w-[118px] h-[44px] border-2 font-semibold text-base border-solid bg-white text-purple border-white rounded-full">
                بزن بریم
              </button>
              <button className="w-[170px] h-[44px] border-2 font-semibold text-base border-solid border-white rounded-full mr-9">
                دانلود اپلیکیشن
              </button>
            </section>
          </section>
        </section>
        <section className='relative'>
          <section className="flex w-[211px] h-[83px] glass absolute top-[50%] ">
            <span className=' flex items-center text-white p-2 text-base font-semibold'>مصرف مناسب ویتامین‌ها و مواد معدنی</span>
            <img src={baseFileUrl+"/images/chemical.png"} className='w-[99px] h-[97px] mt-3' alt=''/>
          </section>
          <section className="flex justify-between w-[222px] h-[57px] glass absolute right-[13%] top-[80%] ">
            <span className=' flex items-center text-white p-2 text-base font-semibold mr-3'>کنترل تناسب اندام</span>
            <img src={baseFileUrl+"/images/pressure.png"} className='w-[54px] h-[72px] mt-[-10px] ml-2' alt=''/>
          </section>
          <section className="flex justify-between w-[179px] h-[70px] glass absolute left-[13%] top-[73%] ">
            <span className=' flex items-center w-[95px] h-[30px] text-white p-1 mt-5 mr-2 text-base font-semibold'>برنامه غذایی مناسب</span>
            <img src={baseFileUrl+"/images/plate.png"} className='w-[78px] h-[78px] ml-[-10px] mt-2' alt=''/>
          </section>
          <section className="flex justify-between w-[179px] h-[78px] glass absolute left-0 top-[20%] ">
            <span className=' flex items-center w-[95px] h-[30px] text-white p-1 mt-5 mr-2 text-base font-semibold'>برنامه ورزشی منظم</span>
            <img src={baseFileUrl+"/images/calender.png"} className='w-[50px] h-[56px] ml-3 mt-2' alt=''/>
          </section>
          <img
            src={baseFileUrl + '/images/hero.png'}
            className="w-[730px] max-w-full"
            alt=""
          />
        </section>
      </section>
      <img
        src={baseFileUrl + '/images/damble.png'}
        className="absolute bottom-[-100px] opacity-20"
        alt=""
      />
    </section>
  </section>
  )
}
