import React, { useState, useContext, useEffect } from 'react'
import { baseFileUrl } from '../../../../config'
import { Link } from 'react-router-dom'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [menuClass, setMenuClass] = useState("");
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const listenScrollEvent = (e) => {
    if (window.scrollY > 0) {
      setMenuClass("tinyMenu");
    } else {
      setMenuClass("");
    }

  
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className={`fixed flex items-center w-full left-0 top-0 h-[80px] bg-[#FFFFFF26] z-20 ${menuClass}`}>
    <section className="container mx-auto">
      <section className="grid grid-cols-4">
        <section className="flex justify-start items-center">
          <img
            src={baseFileUrl + '/images/logo.png'}
            className="w-[46px] h-[46px]"
            alt=""
          />
          <span className="text-white mr-2 font-bold text-[15px]">
            Bodyness
          </span>
        </section>
        <section className="col-span-2">
          <nav className='flex justify-center items-center h-[80px]'>
          <Link to="" className="text-white font-normal text-[18px]">
            خانه
          </Link>
          <Link to="" className="text-white font-normal text-[18px] mr-7">
            ورزش
          </Link>
          <Link to="" className="text-white font-normal text-[18px] mr-7">
            رژیم
          </Link>
          <Link to="" className="text-white font-normal text-[18px] mr-7">
            تماس با ما
          </Link>
          <Link to="" className="text-white font-normal text-[18px] mr-7">
            درباره ی ما
          </Link>
          </nav>
        </section>
        <section className="flex justify-end items-center">
          <button className="bg-purple w-[100px] h-[40px] rounded-full text-white ml-4">
            ثبت نام
          </button>
          <Link to="" className="text-white">
            ورود
          </Link>
        </section>
      </section>
    </section>
  </section>
  )
}
