import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
/* import Muscle from "../../../../../assets/images/home/selectedMuscle.png"; */
import ManFront from '../../../../../components/SVG/ManFront';
import ManBack from '../../../../../components/SVG/ManBack';
import WomanFront from '../../../../../components/SVG/WomanFront';
import WomanBack from '../../../../../components/SVG/WomanBack';
import ArrowLeft from '../../../../..//assets/images/basicInfo/arrowLeftWhite.png';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ setTab, gender }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [muscle, setMuscle] = useState('');
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <span className="tabTitle mt-7 m-auto">
        {' '}
        <img
          src={ArrowLeft}
          alt=""
          className="backBtn"
          onClick={() => setTab(1)}
        />
        {t('Home.ChooseMuscle')}
      </span>
      {/*    <section className="flex justify-around mt-8 muscleBox">
    
      </section> */}
      <section className="m-auto flex justify-center text-center mt-5">
        {gender === 'male' && (
          <>
            <ManFront
              style={{ height: '500px' }}
              setMuscle={setMuscle}
              alt=""
            />
            <ManBack style={{ height: '500px' }} setMuscle={setMuscle} alt="" />
          </>
        )}
        {gender === 'female' && (
          <>
            <WomanFront
              style={{ height: '800px' }}
              setMuscle={setMuscle}
              alt=""
            />
            <WomanBack
              style={{ height: '500px' }}
              setMuscle={setMuscle}
              alt=""
            />
          </>
        )}
      </section>
    </>
  );
}
