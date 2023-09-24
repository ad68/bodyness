import React from "react";
import Menu from "../../components/Menu";
import Section1 from "./Section-1";
import Section2 from "./Section-2";
import Section3 from "./Section-3";
import Section4 from "./Section-4";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
     {/*  <Menu /> */}
      <section className="homeWrapper">
        <Section1 />
        <Section2 />
        <Section3 />
       {/*  <Section4/> */}
      </section>
    </>
  );
}
