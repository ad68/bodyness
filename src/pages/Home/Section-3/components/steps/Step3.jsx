import React from "react";
import lift from "../../../../../assets/images/home/man-lifting.png"
import { useTranslation } from "react-i18next";

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
    <>
      <section className="flex justify-center items-center mt-5">
        <span className="stepNumberBox">3</span>
        <span className="ltr:ml-3 rtl:mr-3 tabTitle flex">
          {t("Home.ChooseEquipment")}
          <img src={lift} className="arm" alt=""/>
       
        </span>
      </section>
      <section className="flex justify-around mt-8 muscleBox">
     
      </section>
    
    </>
  );
}
