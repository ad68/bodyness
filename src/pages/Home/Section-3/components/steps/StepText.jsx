import React from "react";
import Target from "../../../../../assets/images/home/target.svg";
import Dambel from "../../../../../assets/images/home/dambel.svg";
import {useTranslation} from 'react-i18next'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
const {t} = useTranslation();
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="ltr:ml-12 rtl:mr-12 mt-12 stepInfo">
      <img src={Target} alt="" />
      <h2>{t("Home.Improve")}</h2>
      <h3>{t('Home.YourMuscles')}</h3>
      <p>{t('Home.ExperienceBest')}</p>
      <button className="letStartBtn  px-6 mt-6 text-left  hidden md:block">
          <span className="font-bold">{t("Home.LetsStart")}</span>
          <section className="circle">
            <img src={Dambel} alt="" />
          </section>
        </button>
    </section>
  );
}
