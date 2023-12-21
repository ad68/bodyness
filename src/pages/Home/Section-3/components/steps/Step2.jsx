import React from "react";
/* import Muscle from "../../../../../assets/images/home/selectedMuscle.png"; */
import SVG from '../../../../../components/SVG/Muscle'
import Beceps from "../../../../../assets/images/home/biceps.png"
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
        <span className="stepNumberBox">2</span>
        <span className="ltr:ml-3 rtl:mr-3 tabTitle flex">
          {t("Home.ChooseMuscle")}
          <img src={Beceps} className="arm" alt=""/>
       
        </span>
      </section>
      <section className="flex justify-around mt-8 muscleBox">
      {/* <img src={Muscle} className="genderMuscle" alt=""/> */}
    
      <SVG style={{margin:'auto',zIndex:10,height:600}} height='600px'/>
      <section className="watermark">Body Ness</section>
      </section>
    
    </>
  );
}
