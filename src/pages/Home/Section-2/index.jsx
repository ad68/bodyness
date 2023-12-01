import React from 'react';
import { useTranslation } from 'react-i18next';
import Lemon from '../../../assets/images/home/lemon.png';
import FullPlate from '../../../assets/images/home/fullPlate.png';
import Mood1 from '../../../assets/images/home/mood1.svg';
import Mood2 from '../../../assets/images/home/mood2.svg';
import SmallPlate from '../../../assets/images/home/smallPlate.png';
import SmallLemon from '../../../assets/images/home/smallLemon.png';
import Plate from '../../../assets/images/home/section1PlateEn1.png';
import PlateFa from '../../../assets/images/home/section1PlateFr1.png';

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
    <section
      id="sec2"
      className="section2  py-10 px-10 flex flex-wrap md:flex-nowrap"
    >
      <section className="leftBox">
        <h3 className="text-center font-bold text-2xl  md:hidden">
          {t('Home.FoodMoodTime')}
        </h3>
       <h3 className='mb-10 md:hidden text-center'>
       {t('Home.FoodMoodTime2')}
       </h3>
        {/* <section className="tooltip1 hidden md:flex">
          <img src={SmallPlate} alt="" />
          <section>
            <strong>{t("Home.SteakSalad")}</strong>
            <section className="info">
              <span>{t("Home.1plate")}</span>
              <span className="ltr:ml-2 rtl:mr-2">{t("Home.250cal")}</span>
            </section>
          </section>
        </section>
        <section className="tooltip2 hidden md:flex">
          <img src={SmallLemon} alt="" />
          <section>
            <strong>{t("Home.Lemon")}</strong>
            <section className="info">
              <span>{t("Home.3slice")}</span>
              <span className="ltr:ml-2 rtl:mr-2">{t("Home.25cal")}</span>
            </section>
          </section>
        </section>
        <img src={FullPlate} className="fullPlate" alt="" /> */}
        <img
          src={Plate}
          alt=""
          className="mobilePlate m-auto hidden ltr:block"
        />
        <img
          src={PlateFa}
          alt=""
          className="mobilePlate m-auto hidden rtl:block"
        />
      </section>

      <section className="rightBox">
        <section>
          {/* <section className="title font-bold hidden md:flex">
            F
            <img src={Mood1} alt="" />
            <img src={Mood2} alt="" />D
          </section>
          <section className="title2 font-bold hidden md:flex">
            M
            <img src={Mood1} alt="" />
            <img src={Mood2} alt="" />D
          </section> */}
          <p className="mt-10 md:px-10">{t('Home.HealthWell')}</p>

          <button className="letStartBtn ltr:ml-10 rtl:mr-10 px-6 mt-6 text-left  hidden md:block">
            <span className="font-bold">{t('Home.LetsStart')}</span>
            <section className="circle">
              <img src={Lemon} alt="" />
            </section>
          </button>
          <button className="letsStartBtnMobile mt-10 md:hidden">
            {t('Home.LetsStart')}
          </button>
        </section>
      </section>
      {/* </section> */}
    </section>
  );
}
