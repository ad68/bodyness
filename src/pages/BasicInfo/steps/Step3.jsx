import React, { useState, useContext, useEffect } from 'react'
import Step3 from "../../../assets/images/basicInfo/step3.png";
import ArrowLeft from "../../../assets/images/basicInfo/arrowLeft.png";
import {useTranslation} from 'react-i18next'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({setStep}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

const {t} = useTranslation();
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
       <section className="progressBox" >
        <img src={Step3} alt="" />
        <img src={ArrowLeft} alt="" className="arrow" onClick={()=>setStep(2)} />
      </section>
      <span className="block text-center title mt-7">
        {t("Basic.WhatsHeight")}
      </span>
      <button className="letStartBtnMobile" onClick={()=>setStep(4)}>{t("Basic.Next")}</button>
     </>
  )
}
