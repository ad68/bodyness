import React, { useState, useContext, useEffect } from "react";
import Step from "../../../assets/images/basicInfo/step1L.png";
import Progress from "../components/Progress";
import HeightPicker from "../components/HeightPicker"
import { useTranslation } from "react-i18next";


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setStep, activeStep }) {
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
      <Progress stepPic={Step} activeStep={activeStep} setStep={setStep} />
      <span className="block text-center title mt-4">
        {t("Basic.WhatsHeight")}
      </span>
      <section>
      <HeightPicker value={100}/>
      </section>
     
      <button className="letStartBtn" style={{marginTop:10}} onClick={() => setStep(4)}>
        {t("Basic.Next")}
      </button>
    </>
  );
}
