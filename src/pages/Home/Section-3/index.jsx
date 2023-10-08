import React, { useState } from "react";
import LineTab from "./components/LineTab";
import MobileStep1 from "./components/mobileSteps/Step1";
import MobileStep2 from "./components/mobileSteps/Step2";
import MobileStep3 from "./components/mobileSteps/Step3";
import MobileStep4 from "./components/mobileSteps/Step4";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Step4 from "./components/steps/Step4";
import StepText from "./components/steps/StepText";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(1);
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
        <LineTab activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 ? <MobileStep1 /> : ""}
        {activeTab === 2 ? <MobileStep2 /> : ""}
        {activeTab === 3 ? <MobileStep3 /> : ""}
        {activeTab === 4 ? <MobileStep4 /> : ""}
      </section>
      <section
        className="hidden md:grid grid grid-cols-2 gap-10"
        style={{ width: "80%" }}
      >
        <section>
          <LineTab activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === 1 ? <Step1 /> : ""}
          {activeTab === 2 ? <Step2 /> : ""}
          {activeTab === 3 ? <Step3 /> : ""}
          {activeTab === 4 ? <Step4 /> : ""}
        </section>
        <section>
          <StepText />
        </section>
      </section>
    </section>
  );
}
