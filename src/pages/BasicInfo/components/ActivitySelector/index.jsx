import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Core from './components/Core';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveSlide, activeSlide }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(`level two:${activeSlide}`);
  }, []);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  const { t } = useTranslation();
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="bodyFatSelectorBox" style={{ direction: 'ltr' }}>
        <span className={`activeLine${activeSlide}`}></span>
        <Core
          setActive={setActiveSlide}
          active={activeSlide}
          index={1}
          activeColor="#00D5B7"
        />
        <Core
          setActive={setActiveSlide}
          active={activeSlide}
          index={2}
          activeColor="#FF9A7C"
        />
        <Core
          setActive={setActiveSlide}
          active={activeSlide}
          index={3}
          activeColor="#FEB137"
        />
        <Core
          setActive={setActiveSlide}
          active={activeSlide}
          index={4}
          activeColor="#6C95FF"
        />
        <Core
          setActive={setActiveSlide}
          active={activeSlide}
          index={5}
          activeColor="#926CFF"
        />
      </section>
    </>
  );
}
