import React, { useState, useContext, useEffect } from 'react';

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActive, active, index, activeColor }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(`core:${active}`);
  }, [active]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <span
        className={`item ${active === index ? 'active' : ''}`}
        style={{
          border: `3px solid ${active === index ? activeColor : active>index ? "white" :"#b5b5b5"}`,
        }}
        onClick={() => setActive(index)}
      >
        <span
          className="core"
          style={{
            backgroundColor: active === index ? activeColor : '#b5b5b5',
          }}
        ></span>
      </span>
    </>
  );
}
