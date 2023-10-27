import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ activeSlide }) {
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
    <section className="swiperInfo mt-3">
      <span className="title">
        {activeSlide === 1
          ? t("Basic.NotActive")
          : activeSlide === 2
          ? t("Basic.LightlyActive")
          : activeSlide === 3
          ? t("Basic.ModeratelyActive")
          : activeSlide === 4
          ? t("Basic.VeryActive")
          : activeSlide === 5
          ? t("Basic.VeryActive2")
          : ""}
      </span>
      <span className="text">
        {" "}
        {activeSlide === 1
          ? t("Basic.NotActiveDtl")
          : activeSlide === 2
          ? t("Basic.LightlyActiveDtl")
          : activeSlide === 3
          ? t("Basic.ModeratelyActiveDtl")
          : activeSlide === 4
          ? t("Basic.VeryActiveDtl")
          : activeSlide === 5
          ? t("Basic.VeryActive2Dtl")
          : ""}
      </span>
    </section>
  );
}
