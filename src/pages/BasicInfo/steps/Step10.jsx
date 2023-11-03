import React, { useEffect, useState } from "react";
import Step10 from "../../../assets/images/basicInfo/step10.png";
import ArrowLeft from "../../../assets/images/basicInfo/arrowLeft.png";
import { useTranslation } from "react-i18next";
import Yes from "../../../assets/images/basicInfo/yes.png";
import No from "../../../assets/images/basicInfo/no.png";
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
          onClick={() => setStep(9)}
        />
        <img src={Step10} alt="" />
      </section>
      <span className="block text-center title mt-7">
        {t("Basic.ExerciseDiet")}
      </span>
      <section className="yesNoBox">
        <button>
          <img src={Yes} alt="" />
          {t("Basic.Yes")}
        </button>
        <button>
          <img src={No} alt="" />{t("Basic.No")}
        </button>
      </section>
    </>
  );
}
