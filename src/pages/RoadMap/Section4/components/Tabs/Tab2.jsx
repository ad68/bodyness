import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
/* import Muscle from "../../../../../assets/images/home/selectedMuscle.png"; */
import SVG from '../../../../../components/SVG/Muscle'
import ArrowLeft from '../../../../..//assets/images/basicInfo/arrowLeftWhite.png';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ setTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [muscle, setMuscle] = useState('')
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
   {/*    <section className="flex justify-around mt-8 muscleBox">
    
      </section> */}
      <section className='m-auto block text-center'>
      <SVG style={{height:'600px',margin:'auto'}} setMuscle={setMuscle} onClick={() => setTab(3)} alt=""/>
      </section>
     
    </>
  );
}
