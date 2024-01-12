import React, { useState, useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Human from '../../../../../assets/images/roadMap/FROM_5_TO_9 3.png';
import ArrowLeft from '../../../../../assets/images/basicInfo/arrowLeftWhite.png';
import ReactPlayer from 'react-player';
import vid from '../../../../../assets/video/damble.mp4'
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
       {/*  {t('Basic.ChooseLevel')} */}
       سرشانه دمبل چرخشی نشسته
      </span>
      <section className="flex justify-between levelBox">
        <div className="playerWrapper">
          <ReactPlayer
            className="react-player fixed-bottom"
            url={vid}
            width="100%"
            height="100%"
            controls={false}
            loop={true}
            playing={true}
          />
        </div>
      </section>
    </>
  );
}
