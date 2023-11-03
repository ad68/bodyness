import React, { useState } from "react";
import Step6 from "../../../assets/images/basicInfo/step6.png";
import ArrowLeft from "../../../assets/images/basicInfo/arrowLeft.png";
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

export default function Index({ setStep }) {
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
      <section className="progressBox">
        <img
          src={ArrowLeft}
          alt=""
          className="arrow"
          onClick={() => setStep(5)}
        />
        <img src={Step6} alt="" />
      </section>
      <span className="block text-center title mt-7">
        {t("Basic.WhatsGoal")}
      </span>
      <section className="goalBox mt-10" onClick={() => setStep(7)}>
        <span className="text">{t("Basic.LoseWeight")}</span>
        <img src={Goal1} alt="" />
      </section>
      <section className="goalBox mt-2" onClick={() => setStep(7)}>
        <span className="text">{t("Basic.GainWeight")}</span>
        <img src={Goal2} alt="" />
      </section>
      <section className="goalBox mt-2" onClick={() => setStep(7)}>
        <span className="text">{t("Basic.BuildMuscle")}</span>
        <img src={Goal3} alt="" />
      </section>
      <section className="goalBox mt-2" onClick={() => setStep(7)}>
        <span className="text">{t("Basic.Maintain")}</span>
        <img src={Goal4} alt="" />
      </section>
    </>
  );
}
