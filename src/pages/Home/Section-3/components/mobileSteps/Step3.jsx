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
        <span className="stepNumberBox">3</span>
        <span className="ltr:ml-3 rtl:mr-3 tabTitle">
          {t("Home.ChooseEquipment")}
        </span>
      </section>
      <section className="mobileEquipmentBox">
        <section className="mainWrraper">
          <section className="scrollWrapper">
            <section className="box">
              <img src={Damble} alt="" />
              <span className="label">{t("Home.Damble")}</span>
            </section>
            <section className="box">
              <img src={Damble2} alt="" />
              <span className="label">{t("Home.Damble")}</span>
            </section>
            <section className="box">
              <img src={yoga} alt="" />
              <span className="label">{t("Home.Yoga")}</span>
            </section>
            <section className="box">
              <img src={halter} alt="" className="mt-5" />
              <span className="label text-center">
                {t("Home.Body2")} <br />
                {t("Home.Weight")}
              </span>
            </section>
            <section className="box">
              <img src={ball} className="ball" alt="" />
              <span className="label text-center">{t("Home.Ball")}</span>
            </section>
            <section className="box">
              <img src={kettleBell} className="kettle" alt="" />
              <span className="label text-center">{t("Home.KettleBell")}</span>
            </section>
          </section>
          <section className="scrollWrapper mt-4">
            <section className="box">
              <img src={damble3} alt="" />
              <span className="label text-center">{t("Home.Damble")}</span>
            </section>
            <section className="box">
              <img src={kettleBall} alt="" />
              <span className="label text-center">{t("Home.KettleBall")}</span>
            </section>
            <section className="box">
              <img src={tredmill} alt="" />
              <span className="label text-center">{t("Home.Tredmill")}</span>
            </section>
            <section className="box">
              <img src={bicycle} alt="" />
              <span className="label text-center">{t("Home.Bicycles")}</span>
            </section>
            <section className="box">
              <img src={rubber} alt="" />
              <span className="label text-center">{t("Home.Rubber")}</span>
            </section>
            <section className="box">
              <img src={trx} alt="" />
              <span className="label text-center">{t("Home.Trx")}</span>
            </section>
          </section>
        </section>
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
