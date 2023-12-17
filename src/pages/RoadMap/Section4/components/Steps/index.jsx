
import React, { useState, useContext, useEffect } from 'react'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({tab}) {
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
     <>
      <section className="stepWrapper">
          <section className="firstStep active">انتخاب جنسیت</section>
          <section className={`middleStep ${tab>1 && "active"}`} style={{ zIndex: -2 }}>
            عضله هدف
          </section>
          <section className={`middleStep ${tab>2 && "active"}`} style={{ zIndex: -3 }}>
            انتخاب تجهیزات
          </section>
          <section  className={`lastStep ${tab>3 && "active"}`}>سطح شما</section>
        </section>
     </>
  )
}
