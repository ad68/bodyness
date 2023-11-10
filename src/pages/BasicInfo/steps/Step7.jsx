import React, { useEffect, useState } from "react";
import Step from "../../../assets/images/basicInfo/step78910L.png";
import Progress from "../components/Progress";
import { useTranslation } from "react-i18next";
import ActivitySwiper from "../components/ActivitySwiper";
import SwiperInfo from "../components/SwiperInfo";
import SwiperStatus from "../components/SwiperStatus";
import "swiper/css";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setStep, activeStep }) {
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
      <Progress stepPic={Step} activeStep={activeStep} setStep={setStep} />
      <span className="block text-center title mt-7">
        {t("Basic.YourRegular")}
      </span>
      <section className="swiperWrapper">
      <ActivitySwiper setActiveSlide={setActiveSlide} setStep={setStep} />
      <SwiperInfo activeSlide={activeSlide} />
      <SwiperStatus activeSlide={activeSlide} />
      </section>
      
    </>
  );
}
