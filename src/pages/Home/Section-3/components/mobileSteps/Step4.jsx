import React from "react";

import { useTranslation } from "react-i18next";
import Damble from "../../../../../assets/images/icon/damble.png";
import Damble2 from "../../../../../assets/images/icon/damble2.png";
import yoga from "../../../../../assets/images/icon/yoga.png";
import halter from "../../../../../assets/images/icon/halter.png";
import ball from "../../../../../assets/images/icon/ball.png";
import damble3 from "../../../../../assets/images/icon/damble3.png";
import kettleBell from "../../../../../assets/images/icon/damble4.png";
import kettleBall from "../../../../../assets/images/icon/damble5.png";
import tredmill from "../../../../../assets/images/icon/tredmil.png";
import bicycle from "../../../../../assets/images/icon/bycycle.png";
import trx from "../../../../../assets/images/icon/trx.png";
import rubber from "../../../../../assets/images/icon/rubber.png";

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
    
      <span className="block text-center mt-5 title">
        {t("Home.ImproveYourMuscles")}
      </span>
      <p className="px-2 mt-2 text-center">{t("Home.ExperienceBest")}</p>
      <section className="px-10">
        <button className="letStartBtnMobile mt-10">
          {t("Home.LetsStart")}
        </button>
      </section>
    </>
  );
}
