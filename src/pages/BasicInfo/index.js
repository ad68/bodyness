import React, { useState } from "react";
import LanguageBox from "../../components/LanguageBox";
import MobileStep1 from "./mobileSteps/Step1";
import MobileStep2 from "./mobileSteps/Step2";
import MobileStep3 from "./mobileSteps/Step3";
import MobileStep4 from "./mobileSteps/Step4";
import MobileStep5 from "./mobileSteps/Step5";
import MobileStep6 from "./mobileSteps/Step6";
import MobileStep7 from "./mobileSteps/Step7";
import MobileStep8 from "./mobileSteps/Step8";
import MobileStep9 from "./mobileSteps/Step9";
import MobileStep10 from "./mobileSteps/Step10";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import Step10 from "./steps/Step10";

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
      <section className="basicInfoWrapperMobile p-5 md:hidden">
        {activeStep === 1 ? (
          <MobileStep1 setStep={setActiveStep}  />
        ) : activeStep === 2 ? (
          <MobileStep2 setStep={setActiveStep} />
        ) : activeStep === 3 ? (
          <MobileStep3 setStep={setActiveStep} />
        ) : activeStep === 4 ? (
          <MobileStep4 setStep={setActiveStep} />
        ) : activeStep === 5 ? (
          <MobileStep5 setStep={setActiveStep} />
        ) : activeStep === 6 ? (
          <MobileStep6 setStep={setActiveStep} />
        ) : activeStep === 7 ? (
          <MobileStep7 setStep={setActiveStep} />
        ) : activeStep === 8 ? (
          <MobileStep8 setStep={setActiveStep} />
        ) : activeStep === 9 ? (
          <MobileStep9 setStep={setActiveStep} />
        ): activeStep === 10 ? (
          <MobileStep10 setStep={setActiveStep} />
        ):""}
      </section>
      <section className="basicInfoWrapper p-5 hidden md:block">
        {activeStep === 1 ? (
          <Step1 setStep={setActiveStep} activeStep={activeStep} />
        ) : activeStep === 2 ? (
          <Step2 setStep={setActiveStep} activeStep={activeStep}/>
        ) : activeStep === 3 ? (
          <Step3 setStep={setActiveStep} activeStep={activeStep}/>
        ) : activeStep === 4 ? (
          <Step4 setStep={setActiveStep} activeStep={activeStep}/>
        ) : activeStep === 5 ? (
          <Step5 setStep={setActiveStep} activeStep={activeStep}/>
        ) : activeStep === 6 ? (
          <Step6 setStep={setActiveStep} activeStep={activeStep}/>
        ) : activeStep === 7 ? (
          <Step7 setStep={setActiveStep} activeStep={activeStep}/>
        ) : activeStep === 8 ? (
          <Step8 setStep={setActiveStep} activeStep={activeStep}/>
        ) : activeStep === 9 ? (
          <Step9 setStep={setActiveStep} activeStep={activeStep}/>
        ): activeStep === 10 ? (
          <Step10 setStep={setActiveStep} activeStep={activeStep}/>
        ):""}
      </section>

    </>
  );
}
