import React, { useEffect, useState } from 'react';

import ArrowLeft from '../../../../../assets/images/basicInfo/arrowLeftWhite.png';
import ReactPlayer from 'react-player';

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [playState, setPlayState] = useState(false);
  const [vid1Ready, setVid1Ready] = useState(false)
  const [vid2Ready, setVid2Ready] = useState(false)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if(vid1Ready && vid2Ready){
      setPlayState(true)
    }
  }, [vid1Ready,vid2Ready]);
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
      <section className="levelBox">
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4">
          <div className="playerWrapper">
            <ReactPlayer
              className="react-player fixed-bottom"
              url={window.location.origin + '/media/video/DambleFront.MP4'}
              width="100%"
              height="100%"
              controls={false}
              onReady={() => setVid1Ready(true)}
              loop={true}
              playing={playState}
            />
          </div>
          <div className="playerWrapper">
            <ReactPlayer
              className="react-player fixed-bottom"
              url={window.location.origin + '/media/video/DambleSide.MP4'}
              width="100%"
              height="100%"
              controls={false}
              onReady={() => setVid2Ready(true)}
              loop={true}
              playing={playState}
            />
          </div>
        </section>
      </section>
    </>
  );
}
