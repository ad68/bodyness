import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Close from "../../../../assets/images/basicInfo/close.png";
import ArrowLeft from "../../../../assets/images/basicInfo/arrowLeft.png";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ activeStep, stepPic, setStep }) {
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
    <section className="progressBox">
      <img src={stepPic} alt="" />
      <span className="ltr:ml-3 rtl:mr-3">{activeStep}/10</span>
      <Link to="/home">
        <img className="close" src={Close} alt="" />
      </Link>
      {activeStep > 1 && (
        <img
          src={ArrowLeft}
          alt=""
          className="arrow"
          onClick={() => setStep(activeStep - 1)}
        />
      )}
    </section>
  );
}
