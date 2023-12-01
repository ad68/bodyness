import React, { useEffect, useState } from "react";
import Step from "../../../assets/images/basicInfo/step78910L.png";
import Progress from "../components/Progress";
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
  const [activeSlide, setActiveSlide] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(activeSlide);
  }, [activeSlide]);
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
        {t("Basic.RegimDate")}
      </span>
      <section className="mt-10">
        <section className="replyBox" onClick={()=>setStep(10)}>{t("Basic.CurrentMonth")}</section>
        <section className="replyBox"  onClick={()=>setStep(10)}>{t("Basic.CurrentYear")}</section>
        <section className="replyBox" onClick={()=>setStep(10)}>{t("Basic.More1Years")}</section>
      </section>
    </>
  );
}
