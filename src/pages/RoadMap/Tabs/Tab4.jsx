import React, { useState, useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Human from '../../../assets/images/roadMap/FROM_5_TO_9 3.png';
import ArrowLeft from '../../../assets/images/basicInfo/arrowLeft.png';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [value, setValue] = useState('1');
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
          onClick={() => setTab(3)}
        />
        {t('Basic.ChooseLevel')}
      </span>

      <section className="flex justify-between levelBox">
        <section className="item" onClick={() => inputRef1.current.click()}>
          <img src={Human} className="genderImage" alt="" />
          <section className="mt-4">
            <input
              type="radio"
              id="level1"
              name="level"
              ref={inputRef1}
              value={'1'}
            />
            <label for="level1" className="mr-1">
              {t('Basic.Beginner')}
            </label>
          </section>
        </section>

        <section className="item" onClick={() => inputRef2.current.click()}>
          <img src={Human} className="genderImage" alt="" />
          <section className="mt-4">
            <input
              type="radio"
              id="level2"
              name="level"
              ref={inputRef2}
              value="2"
            />
            <label for="level2" className="mr-1">
              {t('Basic.Intermediate')}
            </label>
          </section>
        </section>
        <section className="item" onClick={() => inputRef3.current.click()}>
          <img src={Human} className="genderImage" alt="" />
          <section className="mt-4">
            <input
              type="radio"
              id="level3"
              name="level"
              ref={inputRef3}
              value="3"
            />
            <label for="level3" className="mr-1">
              {t('Basic.Advanced')}
            </label>
          </section>
        </section>
      </section>
    </>
  );
}
