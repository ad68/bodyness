import React, { useState, useContext, useEffect } from 'react'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({activeSlide}) {
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
     <section className={`swiperStatus active${activeSlide} mt-4`}>
        <span className='bar bar1'></span>
        <span className='bar bar2'></span>
        <span className='bar bar3'></span>
        <span className='bar bar4'></span>
        <span className='bar bar5'></span>
     </section>
  )
}
