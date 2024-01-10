import React, { useState, useContext, useEffect } from 'react';
import BodyBuilding from '../../../../assets/images/home/men.png';

import ArrowIcon from '../../../../assets/images/home/Arrow-Icon.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
    <section className="leftBox hidden md:flex">
      <h1 className="md:ml-6 welcome font-semibold">
        {/*  {t('Home.BecomeTheBetter')} {t('Home.VersionOfYourself')} */}
        برای زندگیت
      </h1>
      <h1 className="md:ml-6 welcome font-bold">حرکت کن!</h1>
     
      <p className="md:ml-6 font-normal">بادینس، مسیری هوشمند برای سبک زندگی</p>
      <section className="coachTeamBox grid grid-cols-3 gap-1 ml-6 hidden md:grid">
        <section>
          <img className="bodyImg" src={BodyBuilding} alt="" />
        </section>
        <section className="col-span-2 action">
          <span className="block mt-7 title">{t('Home.CoachTeam')}</span>
          <span className="block font-semibold text">
            {t('Home.TransformLife')}
          </span>
          <Link to="/roadmap/section1">
            <button className="letStartBtn px-6 text-left">
              <span className="font-bold">{t('Home.LetsStart')}</span>
              <section className="circle">
                <img src={ArrowIcon} alt="" />
              </section>
            </button>
          </Link>
        </section>
      </section>
    </section>
  );
}
