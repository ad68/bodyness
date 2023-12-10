import React, { useState, useContext, useEffect } from "react";

import { useTranslation } from "react-i18next";
import Light from "../../../assets/images/basicInfo/light.png";
import Male from "../../../assets/images/basicInfo/male.png";
import Female from "../../../assets/images/basicInfo/female.png";
import Progress from "../components/Progress";
import Step from "../../../assets/images/basicInfo/step1L.png";
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
     <Progress stepPic={Step} activeStep={activeStep} setStep={setStep}/>
      <span className="block text-center title mt-4">
        {t("Basic.WhatsGender")}
      </span>
      <section className="help flex justify-center items-center p-3 mt-7">
        <img src={Light} alt="" />
        <p>
          {t("Basic.BaseHelp")}
        </p>
      </section>
      <section className="flex justify-between genderBox">
        <section className="item" onClick={() => setStep(2)}>
          <img src={Male} className="genderImage" alt="" />
          <span className="title block text-center"> {t("Basic.Male")}</span>
        </section>
        <section className="item">
          <img
            src={Female}
            alt=""
            className="genderImage"
            onClick={() => setStep(2)}
          />
          <span className="title block text-center"> {t("Basic.Female")}</span>
        </section>
      </section>
    </>
  );
}
