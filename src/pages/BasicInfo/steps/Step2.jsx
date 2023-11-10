import React, { useState, useContext, useEffect } from "react";


import { useTranslation } from "react-i18next";
import Light from "../../../assets/images/basicInfo/light.png";
import Step from "../../../assets/images/basicInfo/step1L.png";
import Progress from "../components/Progress";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({setStep, activeStep}) {
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
    <Progress stepPic={Step} activeStep={activeStep} setStep={setStep}/>
     
      <span className="block text-center title mt-7">
        {t("Basic.WhatsAge")}
      </span>
      <section className="help flex justify-center items-center p-3 mt-7" onTouchStart={()=>alert("ok")}>
        <img src={Light} alt="" />
        <p>
        This will help us make adjusment adjustment to your personal
        </p>
      </section>
      <button className="letStartBtn" onClick={()=>setStep(3)}>{t("Basic.Next")}</button>
   
    </>
  );
}
