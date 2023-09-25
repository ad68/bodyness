import React from "react";
import { useTranslation } from "react-i18next";
import SaladFish from "../../../assets/images/home/saladFish.png";
import SaladAvocado from "../../../assets/images/home/saladAvocado.png";
import SaladEgg from "../../../assets/images/home/saladEgg.png";
import SaladGreen from "../../../assets/images/home/saladGreen.png";
import Cal from "../../../assets/images/icon/cal.png";
import Time from "../../../assets/images/icon/time.png";
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
    <section className="section5 flex md:hidden">
      <h2 className="title">{t("Home.WakeUpEarly")}</h2>
      <section className="foodWrapper">
        <section className="foodBox mt-12">
          <img alt="" className="saladPlate" src={SaladFish} />
          <span className="title">{t("Home.FishSalad")}</span>
          <section className="calTimeBox">
            <img src={Cal} alt="" />
            <span className="ltr:mr-2 rtl:ml-2">25 {t("Home.Cal")}</span>
            <img src={Time} alt="" />
            <span>15 {t("Home.Min")}</span>
          </section>
          <section className="fatBox">
            <section>
              <span className="grayTitle">{t("Home.Fats")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
            <span className="pipe"></span>
            <section>
              <span className="grayTitle">{t("Home.Carb")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
            <span className="pipe"></span>
            <section>
              <span className="grayTitle">{t("Home.Protein")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
          </section>
        </section>
        <section className="foodBox mt-12">
          <img alt="" className="saladPlate" src={SaladAvocado} />
          <span className="title">{t("Home.AvocadoSalad")}</span>
          <section className="calTimeBox">
            <img src={Cal} alt="" />
            <span className="ltr:mr-2 rtl:ml-2">25 {t("Home.Cal")}</span>
            <img src={Time} alt="" />
            <span>15 {t("Home.Min")}</span>
          </section>
          <section className="fatBox">
            <section>
              <span className="grayTitle">{t("Home.Fats")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
            <span className="pipe"></span>
            <section>
              <span className="grayTitle">{t("Home.Carb")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
            <span className="pipe"></span>
            <section>
              <span className="grayTitle">{t("Home.Protein")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
          </section>
        </section>
      </section>
      <section className="foodWrapper mt-5">
        <section className="foodBox mt-12">
          <img alt="" className="saladPlate" src={SaladEgg} />
          <span className="title">{t("Home.EggSalad")}</span>
          <section className="calTimeBox">
            <img src={Cal} alt="" />
            <span className="ltr:mr-2 rtl:ml-2">25 {t("Home.Cal")}</span>
            <img src={Time} alt="" />
            <span>15 {t("Home.Min")}</span>
          </section>
          <section className="fatBox">
            <section>
              <span className="grayTitle">{t("Home.Fats")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
            <span className="pipe"></span>
            <section>
              <span className="grayTitle">{t("Home.Carb")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
            <span className="pipe"></span>
            <section>
              <span className="grayTitle">{t("Home.Protein")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
          </section>
        </section>
        <section className="foodBox mt-12">
          <img alt="" className="saladPlate" src={SaladGreen} />
          <span className="title">{t("Home.GreenSalad")}</span>
          <section className="calTimeBox">
            <img src={Cal} alt="" />
            <span className="ltr:mr-2 rtl:ml-2">25 {t("Home.Cal")}</span>
            <img src={Time} alt="" />
            <span>15 {t("Home.Min")}</span>
          </section>
          <section className="fatBox">
            <section>
              <span className="grayTitle">{t("Home.Fats")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
            <span className="pipe"></span>
            <section>
              <span className="grayTitle">{t("Home.Carb")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
            <span className="pipe"></span>
            <section>
              <span className="grayTitle">{t("Home.Protein")}</span>
              <span className="value">16{t("Home.Gr")}</span>
            </section>
          </section>
        </section>
      
      </section>
      <button className="letStartBtnMobile mt-10">
          {t("Home.LetsStart")}
        </button>
    </section>
  );
}
