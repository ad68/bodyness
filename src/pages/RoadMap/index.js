import React, { useState, useContext, useEffect } from 'react';
import Menu from '../../components/Menu';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
/* import msvg from '../../assets/images/svg/posterior forearms.svg' */

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
const [muscle, setMuscle] = useState()
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(()=>{
  console.log(muscle)
    },[muscle])
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Menu />
      <section className="roadMapWrapper">
        <Section1 />
       {/*  <Section2 /> */}
        <Section3 />
        <Section4 />
        
      
      </section>
    </>
  );
}
