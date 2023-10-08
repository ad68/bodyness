import React from "react";
import lift from "../../../../../assets/images/home/man-lifting.png";
import { useTranslation } from "react-i18next";
import Yoga from "../../../../../assets/images/home/yoga-img1.png";
import Banner from "../../../../../assets/images/home/banner-img.png";
import Boxing from "../../../../../assets/images/home/boxing-img.png";
import Lifting from "../../../../../assets/images/home/weight-lifting-img.png";
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
    <>
      <section className="flex justify-center items-center mt-5">
        <span className="stepNumberBox">4</span>
        <span className="ltr:ml-3 rtl:mr-3 tabTitle flex">
        {t("Home.SeeCoachVideos")}
   
        </span>
      </section>
      <section className="coachSportBox">
      <section className="flex justify-between">
      <section className="box">
      <img src={Yoga} alt="" />
      </section>
        <section className="box">
        <img src={Banner} alt="" className="mt-12" />
        </section>
       
      </section>
      <section className="flex justify-between mt-2">
      <section className="box">
      <img src={Boxing}  alt="" />
      </section>
        <section className="box">
        <img src={Lifting}  alt="" />
        </section>
       
      </section>
      </section>
    </>
  );
}
