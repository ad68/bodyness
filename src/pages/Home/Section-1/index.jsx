import React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../../../components/Menu';
import Welcome from './components/Welcome';
import MainImage from './components/MainImage';
import Mobile from './components/Mobile';
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
    <>
      <Menu />
      <section className="section1">
        {/* <img src={window.location.origin + '/images/logo192.png'} alt="" /> */}
        <Welcome />
        <MainImage />
        <Mobile />
      </section>
    </>
  );
}
