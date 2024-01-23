import React from "react";
import {Link} from 'react-router-dom'
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
        <span className="ltr:ml-3 rtl:mr-3 tabTitle">
          {t("Home.SeeCoachVideos")}
        </span>
      </section>
      <section className="mobileCoachSportBox">
        <section className="flex justify-between">
          <section className="box">
            <img src={Yoga} alt="" />
          </section>
          <section className="box">
            <img src={Banner} alt="" className="mt-12" />
          </section>
        </section>
        <section className="flex justify-center mt-3">
          <section className="box">
            <img src={Boxing}  alt="" />
          </section>
          <section className="box">
            <img src={Lifting}  alt="" />
          </section>
        </section>
      </section>

      <span className="block text-center mt-10 title">
        {t("Home.ImproveYourMuscles")}
      </span>
      <p className="px-2 mt-2 text-center">{t("Home.ExperienceBest")}</p>
      <section className="px-10">
      <Link to="/roadmap/section4">
      <button className="letStartBtnMobile mt-5">
          {t("Home.LetsStart")}
        </button>
      </Link>
       
      </section>
    </>
  );
}
