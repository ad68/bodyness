import React, { useState, useContext, useEffect } from 'react'

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
     <section className='flex justify-between w-[323px] h-[85px] mt-4'>
       <input className='w-[102px] h-[48px] bg-[#F4F4F4] rounded-[12px] text-center' placeholder='روز'/>
       <input className='w-[102px] h-[48px] bg-[#F4F4F4] rounded-[12px] text-center' placeholder='ماه'/>
       <input className='w-[102px] h-[48px] bg-[#F4F4F4] rounded-[12px] text-center'placeholder='سال'/>
     </section>
  )
}
