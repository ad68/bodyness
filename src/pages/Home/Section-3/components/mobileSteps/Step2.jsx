import React from "react";

import { useTranslation } from "react-i18next";
import Body from '../../../../../assets/images/home/man-front.svg'

/* import Muscle from "../../../../../assets/images/home/selectedMuscle.png";
 */
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
        <span className="stepNumberBox">2</span>
        <span className="ltr:ml-3 rtl:mr-3 tabTitle">
        {t("Home.ChooseMuscle")}
        </span>
      </section>
      <section className="mobileMuscleBox">
        {/* <img src={Muscle} className="muscle mt-8 m-auto" alt="" /> */}
       {/*  <SVG style={{height:'312px',margin:'auto'}} /> */}
       <img src={Body} style={{margin:'auto',zIndex:10,height:300}} alt="" height='600px'/>
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
