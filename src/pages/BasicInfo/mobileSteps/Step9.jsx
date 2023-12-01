import React, { useEffect, useState } from "react";
import Step9 from "../../../assets/images/basicInfo/step9.png";
import ArrowLeft from "../../../assets/images/basicInfo/arrowLeft.png";
import { useTranslation } from "react-i18next";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setStep }) {
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
      <section className="progressBox">
        <img
          src={ArrowLeft}
          alt=""
          className="arrow"
          onClick={() => setStep(8)}
        />
        <img src={Step9} alt="" />
      </section>
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
