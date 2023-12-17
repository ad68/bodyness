import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Damble from "../../../../../assets/images/icon/damble.png";
/* import Damble2 from "../../../../../assets/images/icon/damble2.png";
import yoga from "../../../../../assets/images/icon/yoga.png"; */
import smith from "../../../../../assets/images/icon/smith.png";
import halter from "../../../../../assets/images/icon/halter.png";
import cable from "../../../../../assets/images/icon/cable.png";
/* import ball from "../../../../../assets/images/icon/ball.png";
import damble3 from "../../../../../assets/images/icon/damble3.png"; */
import kettleBell from "../../../../../assets/images/icon/damble4.png";
import bodyWeight from "../../../../../assets/images/icon/bodyWeight.png";
/* import kettleBall from "../../../../../assets/images/icon/damble5.png";
import tredmill from "../../../../../assets/images/icon/tredmil.png";
import bicycle from "../../../../../assets/images/icon/bycycle.png";
import trx from "../../../../../assets/images/icon/trx.png";
import rubber from "../../../../../assets/images/icon/rubber.png"; */
import ArrowLeft from '../../../../../assets/images/basicInfo/arrowLeftWhite.png';
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
          onClick={() => setTab(2)}
        />{t("Home.ChooseEquipment")}</span>
      <section className="equipmentBox">
        <section className="grid grid-cols-6 gap-4 ">
          <section className="box" onClick={() => setTab(4)}>
            <img src={Damble} alt="" />
            <span className="label">{t("Home.Damble")}</span>
          </section>
         {/*  <section className="box" onClick={() => setTab(4)}>
            <img src={Damble2} alt="" />
            <span className="label">{t("Home.Damble")}</span>
          </section> */}
         {/*  <section className="box" onClick={() => setTab(4)}>
            <img src={yoga} alt="" />
            <span className="label">{t("Home.Yoga")}</span>
          </section> */}
          <section className="box" onClick={() => setTab(4)}>
            <img src={halter} alt="" className="mt-6" />
            <span className="label text-center">{t("Home.Halter")} </span>
          </section>
         {/*  <section className="box" onClick={() => setTab(4)}>
            <img src={ball} className="ball" alt="" />
            <span className="label text-center">{t("Home.Ball")}</span>
          </section> */}
          <section className="box" onClick={() => setTab(4)}>
            <img src={kettleBell} className="kettle"  alt="" />
            <span className="label text-center">{t("Home.KettleBell")}</span>
          </section>
          <section className="box" onClick={() => setTab(4)}>
            <img src={cable} alt=""  />
            <span className="label text-center">{t("Home.CableMachine")} </span>
          </section>
          <section className="box" onClick={() => setTab(4)}>
            <img src={smith} className="ball" alt="" />
            <span className="label text-center">{t("Home.SmithMachine")}</span>
          </section>
          <section className="box" onClick={() => setTab(4)}>
            <img src={bodyWeight} className="kettle"  alt="" />
            <span className="label text-center">{t("Home.BodyWeight")}</span>
          </section>
         {/*  <section className="box" onClick={() => setTab(4)}>
            <img src={damble3}   alt="" />
            <span className="label text-center">{t("Home.Damble")}</span>
          </section>
          <section className="box" onClick={() => setTab(4)}>
            <img src={kettleBall}   alt="" />
            <span className="label text-center">{t("Home.KettleBall")}</span>
          </section> */}
        {/*   <section className="box" onClick={() => setTab(4)}>
            <img src={tredmill}   alt="" />
            <span className="label text-center">{t("Home.Tredmill")}</span>
          </section>
          <section className="box" onClick={() => setTab(4)}>
            <img src={bicycle}   alt="" />
            <span className="label text-center">{t("Home.Bicycles")}</span>
          </section> */}
         {/*  <section className="box" onClick={() => setTab(4)}>
            <img src={rubber}   alt="" />
            <span className="label text-center">{t("Home.Rubber")}</span>
          </section>
          <section className="box" onClick={() => setTab(4)}>
            <img src={trx}   alt="" />
            <span className="label text-center">{t("Home.Trx")}</span>
          </section> */}
        </section>
      </section>
    </>
  );
}
