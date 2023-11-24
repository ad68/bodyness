import React, { useState } from "react";
import Step5 from "../../../assets/images/basicInfo/step5.png";
import ArrowLeft from "../../../assets/images/basicInfo/arrowLeft.png";
import { useTranslation } from "react-i18next";
import BodyFatSelector from "../components/BodyFatSelector";
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

export default function Index({setStep}) {
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
      <section className="progressBox">
      <img src={ArrowLeft} alt="" className="arrow" onClick={()=>setStep(4)} />
        <img src={Step5} alt="" />
      </section>
      <section className="contentWrapper">
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
      <button onClick={()=>setStep(6)} className="letStartBtnMobile">{t("Basic.Next")}</button>
      </section>
      
    </>
  );
}
