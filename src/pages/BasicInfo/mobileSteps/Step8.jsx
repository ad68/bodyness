import React, { useEffect, useState } from 'react';
import Step8 from '../../../assets/images/basicInfo/step8.png';

import ArrowLeft from '../../../assets/images/basicInfo/arrowLeft.png';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setStep }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
  const navigation = useNavigate();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [reply, setReply] = useState();
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (reply === 1) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: t("Notification.InfoSaved"),
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        navigation("/home")
      }, 2000);
    } else if(reply>1) {
      setStep(9);
    }
  }, [reply]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
 
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="progressBox">
        <img
          src={ArrowLeft}
          alt=""
          className="arrow"
          onClick={() => setStep(7)}
        />
        <img src={Step8} alt="" />
      </section>
      <span className="block text-center title mt-7">{t('Basic.HowDiet')}</span>
      <section className="mt-10">
        <button className="replyBox" onClick={() => setReply(1)}>
          {t('Basic.NoDiet')}
        </button>
        <button className="replyBox" onClick={() => setReply(2)}>
          1 {t('Basic.Time')}
        </button>

        <button className="replyBox" onClick={() => setReply(3)}>
          {t('Basic.More1Times')}
        </button>
      </section>
    </>
  );
}
