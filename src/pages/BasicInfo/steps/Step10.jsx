import React, { useEffect, useState } from 'react';
import Step from '../../../assets/images/basicInfo/step78910L.png';
import Progress from '../components/Progress';
import { useTranslation } from 'react-i18next';
import Yes from '../../../assets/images/basicInfo/yes.png';
import No from '../../../assets/images/basicInfo/no.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setStep, activeStep }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
  const navigation = useNavigate();
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const saveInfo = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: t('Notification.InfoSaved'),
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      navigation('/home');
    }, 2000);
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Progress stepPic={Step} activeStep={activeStep} setStep={setStep} />
      <span className="block text-center title mt-7">
        {t('Basic.ExerciseDiet')}
      </span>
      <section className="yesNoBox">
        <button onClick={saveInfo}>
          <img src={Yes} alt="" />
          {t('Basic.Yes')}
        </button>
        <button onClick={saveInfo}>
          <img src={No} alt="" />
          {t('Basic.No')}
        </button>
      </section>
    </>
  );
}
