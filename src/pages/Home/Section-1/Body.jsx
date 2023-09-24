import React from "react";
import BodyBuilding from "../../../assets/images/home/body-building-img.svg";
import LetsGo from "../../../assets/images/home/letsgo.png";
import ArrowIcon from "../../../assets/images/home/Arrow-Icon.svg";
import Plate from "../../../assets/images/home/section1Palte.png";
import PlateFa from "../../../assets/images/home/section1PalteFA.png";
import Watermark from "./Watermark";
import { useTranslation } from "react-i18next";
import Menu from "../../../components/Menu";
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
    <section className="body" id="section1Body">
      <section className="py-10 px-10 flex flex-wrap md:flex-nowrap">
        <Menu />
        <section className="relative leftBox">
          <Watermark />
          {/* mobile */}
          <h1 className="learn md:hidden mt-5">
            {t("Home.Learn1")}
            <strong className="ltr:ml-1 rtl:mr-1">
              {t("Home.Daily")}
            </strong>{" "}
            {t("Home.Learn2")}
          </h1>
          <section className="md:hidden my-5">
            <img src={Plate} alt="" className="mobilePlate m-auto hidden ltr:block" />
            <img src={PlateFa} alt="" className="mobilePlate m-auto hidden rtl:block" />
          </section>
          {/* ---------------------------- */}
          <h1 className="hidden md:block md:ml-6 welcome font-semibold">
            {t("Home.BecomeTheBetter")}
          </h1>
          <h1 className="hidden md:block md:ml-6 welcome font-semibold">
            {t("Home.VersionOfYourself")}
          </h1>
          <p className="md:ml-6 font-normal">{t("Home.TransformLife")}</p>
          {/* mobile */}
          <section className="md:hidden" >
            <img src={LetsGo} className="m-auto letsGoImg" alt="" />
          </section>
          {/* ---------------------------- */}
          <section className="coachTeamBox grid grid-cols-3 gap-1 ml-6 hidden md:grid">
            <section>
              <img className="bodyImg" src={BodyBuilding} alt="" />
            </section>
            <section className="col-span-2 action">
              <span className="block mt-7 title">{t("Home.CoachTeam")}</span>
              <span className="block font-semibold text">
                {t("Home.BuildBody")}
              </span>
              <button className="letStartBtn px-6 text-left">
                <span className="font-bold">{t("Home.LetsStart")}</span>
                <section className="circle">
                  <img src={ArrowIcon} alt="" />
                </section>
              </button>
            </section>
          </section>
        </section>
        <section className="hidden md:flex justify-center items-center rightBox">
          <img className="plate hidden ltr:block" src={Plate} alt="" />
          <img className="plate hidden rtl:block" src={PlateFa} alt="" />
        </section>
        {/* mobile */}
        <button className="letsStartBtnMobile mt-5 md:hidden">
          {t("Home.LetsStart")}
        </button>
        {/* ---------------------------- */}
      </section>
    </section>
  );
}
