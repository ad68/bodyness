import React, { useState, useContext, useEffect } from "react";
import LineTab from "./components/LineTab";
import MobileStep1 from "./components/mobileSteps/Step1";
import Step1 from "./components/steps/Step1";
import StepText from "./components/steps/StepText";
import { useTranslation } from "react-i18next";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
    <section className="section3  px-1 py-10" id="sec3">
      {/* Mobile */}
      <section className="md:hidden">
        <LineTab />
        <MobileStep1 />
      </section>
      <section className="hidden md:grid grid grid-cols-2 gap-10" style={{ width: "80%" }}>
        <section>
          <LineTab />
          <Step1 />
        </section>
        <section>
          <StepText />
        </section>
      </section>
    </section>
  );
}
