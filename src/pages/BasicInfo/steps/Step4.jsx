import React, { useState, useContext, useEffect } from "react";
import Step from "../../../assets/images/basicInfo/step456L.png";
import WeightPicker from "../components/WeightPicker"
import { useTranslation } from "react-i18next";
import Progress from "../components/Progress";
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
      <span className="block text-center title mt-7">
        {t("Basic.WhatsWeight")}
      </span>
      <WeightPicker value={60}/>
      <button className="letStartBtn" style={{marginTop:15}} onClick={() => setStep(5)}>
        {t("Basic.Next")}
      </button>
    </>
  );
}
