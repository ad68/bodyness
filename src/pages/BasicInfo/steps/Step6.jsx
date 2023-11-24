import React, { useState } from "react";
import Step from "../../../assets/images/basicInfo/step456L.png";
import Progress from "../components/Progress";

import { useTranslation } from "react-i18next";
import Goal1 from "../../../assets/images/basicInfo/goal1.png";
import Goal2 from "../../../assets/images/basicInfo/goal2.png";
import Goal3 from "../../../assets/images/basicInfo/goal3.png";
import Goal4 from "../../../assets/images/basicInfo/goal4.png";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({setStep,activeStep}) {
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
        {t("Basic.WhatsGoal")}
      </span>
      <section className="goalBox mt-12 m-auto" onClick={() => setStep(7)}>
        <span className="text">{t("Basic.LoseWeight")}</span>
        <img src={Goal1} alt="" />
      </section>
      <section className="goalBox mt-2 m-auto" onClick={() => setStep(7)}>
        <span className="text">{t("Basic.GainWeight")}</span>
        <img src={Goal2} alt="" />
      </section>
    {/*   <section className="goalBox mt-2 m-auto" onClick={() => setStep(7)}>
        <span className="text">{t("Basic.BuildMuscle")}</span>
        <img src={Goal3} alt="" />
      </section> */}
      <section className="goalBox mt-2 m-auto" onClick={() => setStep(7)}>
        <span className="text">{t("Basic.Maintain")}</span>
        <img src={Goal4} alt="" />
      </section>
    </>
  );
}
