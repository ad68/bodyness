import React, { useState } from "react";
import Step from "../../../assets/images/basicInfo/step456L.png";

import { useTranslation } from "react-i18next";
import BodyFatSelector from "../components/BodyFatSelector";
import Progress from "../components/Progress";
import Body1 from "../../../assets/images/basicInfo/body(1).png";
import Body2 from "../../../assets/images/basicInfo/body(2).png";
import Body3 from "../../../assets/images/basicInfo/body(2).png";
import Body4 from "../../../assets/images/basicInfo/body(3).png";
import Body5 from "../../../assets/images/basicInfo/body(4).png";
import Body6 from "../../../assets/images/basicInfo/body(5).png";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({setStep,activeStep}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [bodyFat, setBodyFat] = useState(1);
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
        {t("Basic.ChooseBodyFat")}
      </span>
      <img
        src={
          bodyFat === 1
            ? Body1
            : bodyFat === 2
            ? Body2
            : bodyFat === 3
            ? Body3
            : bodyFat === 4
            ? Body4
            : bodyFat === 5
            ? Body5
            : bodyFat === 6
            ? Body6
            : ""
        }
        className="bodyImage"
        alt=""
      />
      <BodyFatSelector setBodyFat={setBodyFat} />
      <button onClick={()=>setStep(6)} className="letStartBtn">{t("Basic.Next")}</button>
    </>
  );
}
