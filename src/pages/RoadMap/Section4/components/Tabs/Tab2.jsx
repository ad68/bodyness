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
  const [front22, setFront22] = useState(false);
  const [back22, setBack22] = useState(false);
  const [front16, setFront16] = useState(false);
  const [back16, setBack16] = useState(false);
  const [front11, setFront11] = useState(false);
  const [back11, setBack11] = useState(false);
  const [front12, setFront12] = useState(false);
  const [back12, setBack12] = useState(false);
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
        <img
          src={ArrowLeft}
          alt=""
          className="backBtn"
          onClick={() => setTab(1)}
        />
        {t('Home.ChooseMuscle')}
      </span>

      <section className="m-auto flex justify-center text-center mt-5">
        {gender === 'male' && (
          <>
            <ManFront
              style={{ height: '500px' }}
              setMuscle={setMuscle}
              alt=""
              front11={front11}
              front12={front12}
              front16={front16}
              front22={front22}
              setBack11={setBack11}
              setBack12={setBack12}
              setBack16={setBack16}
              setBack22={setBack22}
            />
            <ManBack
              back11={back11}
              back12={back12}
              back16={back16}
              back22={back22}
              setFront11={setFront11}
              setFront12={setFront12}
              setFront16={setFront16}
              setFront22={setFront22}
              style={{ height: '500px' }}
              setMuscle={setMuscle}
              alt=""
            />
          </>
        )}
        {gender === 'female' && (
          <>
            <WomanFront
              style={{ height: '500px' }}
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
