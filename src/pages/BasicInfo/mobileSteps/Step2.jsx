import React, { useState, useContext, useEffect } from "react";
import Step2 from "../../../assets/images/basicInfo/step2.png";
import ArrowLeft from "../../../assets/images/basicInfo/arrowLeft.png";
import { useTranslation } from "react-i18next";
import Light from "../../../assets/images/basicInfo/light.png";


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({setStep}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
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
        <img src={Step2} alt="" />
        <img src={ArrowLeft} alt="" className="arrow" onClick={()=>setStep(1)} />
      </section>
      <span className="block text-center title mt-7">
        {t("Basic.WhatsAge")}
      </span>
      <section className="help flex justify-center items-center p-3 mt-7" onTouchStart={()=>alert("ok")}>
        <img src={Light} alt="" />
        <p>
        {t("Basic.AgeHelp")}
        </p>
      </section>
      <button className="letStartBtnMobile" onClick={()=>setStep(3)}>{t("Basic.Next")}</button>
   
    </>
  );
}
