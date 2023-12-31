import React from "react";
import Female from "../../../../../assets/images/home/female.svg";
import FemaleBody from "../../../../../assets/images/home/woman-front.svg";
import Male from "../../../../../assets/images/home/male.svg";
import MaleBody from "../../../../../assets/images/home/man-front.svg";
import { useTranslation } from "react-i18next";

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
        <span className="stepNumberBox">1</span>
        <span className="ltr:ml-3 rtl:mr-3 tabTitle">
          {t("Home.ChooseGender")}
        </span>
      </section>
      <section className="flex justify-around mt-8">
        <section className="genderBox  pb-4">
          <span className="genderTitle">
            <img src={Female} alt="" />
            <span>{t("Home.Female")}</span>
          </span>
          <img src={FemaleBody} alt="" className="genderBody m-auto mt-4" />
        </section>
        <section className="genderBox  pb-4">
          <span className="genderTitle">
            <img src={Male} alt="" />
            <span>{t("Home.Male")}</span>
          </span>
          <img src={MaleBody} alt="" className="genderBody m-auto mt-4" />
        </section>
      </section>
     {/*  <span className="block text-center mt-5 title">
        {t("Home.ImproveYourMuscles")}
      </span>
      <p className="px-2 mt-2">{t("Home.ExperienceBest")}</p>
      <section className="px-10">
        <button className="letStartBtnMobile mt-10">
          {t("Home.LetsStart")}
        </button>
      </section> */}
    </>
  );
}
