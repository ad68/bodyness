import React, { useState, useContext, useEffect, useRef } from 'react';

import ArrowLeft from '../../../../../assets/images/basicInfo/arrowLeftWhite.png';
import ReactPlayer from 'react-player';
import vid from '../../../../../assets/video/damble.MP4'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

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
