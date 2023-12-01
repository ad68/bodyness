import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Muscle from "../../../assets/images/home/selectedMuscle.png";
import ArrowLeft from '../../../assets/images/basicInfo/arrowLeftWhite.png';
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
      <span className="tabTitle mt-7 m-auto">  <img
          src={ArrowLeft}
          alt=""
          className="backBtn"
          onClick={() => setTab(1)}
        />{t("Home.ChooseMuscle")}</span>
      <section className="flex justify-around mt-8 muscleBox">
      <img src={Muscle} className="genderMuscle" onClick={() => setTab(3)} alt=""/>
      
      </section>
    </>
  );
}
