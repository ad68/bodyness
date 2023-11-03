import React, { useEffect, useState } from "react";
import Step7 from "../../../assets/images/basicInfo/step7.png";

import ArrowLeft from "../../../assets/images/basicInfo/arrowLeft.png";
import { useTranslation } from "react-i18next";
import ActivitySwiper from "../components/ActivitySwiper";
import SwiperInfo from "../components/SwiperInfo";
import SwiperStatus from '../components/SwiperStatus'
import "swiper/css";
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
          onClick={() => setStep(6)}
        />
        <img src={Step7} alt="" />
      </section>
      <span className="block text-center title mt-7">
        {t("Basic.YourRegular")}
      </span>
      <ActivitySwiper setActiveSlide={setActiveSlide} setStep={setStep} />
      <SwiperInfo activeSlide={activeSlide} />
      <SwiperStatus activeSlide={activeSlide}/>
    </>
  );
}
