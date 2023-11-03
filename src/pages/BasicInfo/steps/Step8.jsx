import React, { useEffect, useState } from "react";
import Step8 from "../../../assets/images/basicInfo/step8.png";

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
          onClick={() => setStep(7)}
        />
        <img src={Step8} alt="" />
      </section>
      <span className="block text-center title mt-7">
        {t("Basic.HowDiet")}
      </span>
      <section className="mt-10">
         <section className="replyBox" onClick={()=>setStep(9)}>
         1 {t("Basic.Time")}
         </section>
         <section className="replyBox" onClick={()=>setStep(9)}>
         2 {t("Basic.Times")}
         </section>
         <section className="replyBox" onClick={()=>setStep(9)}>
         3 {t("Basic.Times")}
         </section>
         <section className="replyBox" onClick={()=>setStep(9)}>
         {t("Basic.More3Times")}
         </section>
      </section>
     
    </>
  );
}
