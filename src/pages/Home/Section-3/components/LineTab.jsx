import React from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ activeTab, setActiveTab }) {
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
      <section className="lineTab">
        <section className={`tab ${activeTab === 1 ? "active" : ""}`} onClick={()=>setActiveTab(1)}></section>
        <section className={`tab ${activeTab === 2 ? "active" : ""}`} onClick={()=>setActiveTab(2)}></section>
        <section className={`tab ${activeTab === 3 ? "active" : ""}`} onClick={()=>setActiveTab(3)}></section>
        <section className={`tab ${activeTab === 4 ? "active" : ""}`} onClick={()=>setActiveTab(4)}></section>
      </section>
    </>
  );
}
