import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LetsGo from '../../../../assets/images/home/letsgo.png';
import Plate from '../../../../assets/images/home/Recipe.png';
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
    <section className="mobileWrapper p-5 flex  md:hidden">
      <span className="learn1">
        {t('Home.BecomeTheBetter')} {t('Home.VersionOfYourself')}
      </span>
      <section className="my-5">
        <img src={Plate} alt="" className="mobilePlate m-auto" />
      </section>
      <h2 className="text-center font-bold  mt-3">{t('Home.TransformLife')}</h2>
      <section>
        <img src={LetsGo} className="m-auto letsGoImg" alt="" />
      </section>
      <button className="letsStartBtnMobile">
        <Link to="/roadmap/section1">{t('Home.LetsStart')}</Link>
      </button>
    </section>
  );
}
