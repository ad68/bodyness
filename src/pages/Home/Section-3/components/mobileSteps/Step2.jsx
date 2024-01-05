import React from "react";

import { useTranslation } from "react-i18next";
import SVG from '../../../../../components/SVG/ManFront'

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
        <SVG style={{height:'312px',margin:'auto'}} />
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
