import React, { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import LanguageBox from "../../components/LanguageBox";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeStep, setActiveStep] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <LanguageBox mode="other" />
      <section className="basicInfoWrapper p-5 md:hidden">
        {activeStep === 1 ? (
          <Step1 setStep={setActiveStep} />
        ) : activeStep === 2 ? (
          <Step2 setStep={setActiveStep} />
        ) : activeStep === 3 ? (
          <Step3 setStep={setActiveStep} />
        ) : activeStep === 4 ? (
          <Step4 setStep={setActiveStep} />
        ) : activeStep === 5 ? (
          <Step5 setStep={setActiveStep} />
        ) : (
          ""
        )}
      </section>
    </>
  );
}