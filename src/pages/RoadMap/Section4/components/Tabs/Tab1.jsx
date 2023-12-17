import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Female from '../../../../../assets/images/home/female.svg';
import FemaleBody from '../../../../../assets/images/home/femaleBody.svg';
import Male from '../../../../../assets/images/home/male.svg';
import MaleBody from '../../../../../assets/images/home/maleBody.svg';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setTab }) {
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
      <span className="tabTitle mt-7 m-auto">{t('Home.ChooseGender')}</span>
      <section className="flex justify-around m-auto mt-7 genderWrapper">
        <section className="genderBox pb-4" onClick={() => setTab(2)}>
          <span className="genderTitle">
            <img src={Female} alt="" />
            <span>{t('Home.Female')}</span>
          </span>
          <img src={FemaleBody} alt="" className="genderBody m-auto mt-4" />
        </section>
        <section className="genderBox pb-4" onClick={() => setTab(2)}>
          <span className="genderTitle">
            <img src={Male} alt="" />
            <span>{t('Home.Male')}</span>
          </span>
          <img src={MaleBody} alt="" className="genderBody m-auto mt-4" />
        </section>
      </section>
    </>
  );
}
