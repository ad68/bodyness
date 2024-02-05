import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ mode }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { i18n } = useTranslation();
  const lng = i18n.language;

  // ─── States ─────────────────────────────────────────────────────────────────────
  // ─── Functions ──────────────────────────────────────────────────────────────────

  const changeLanguage = (lang) => {
    localStorage.lang = lang;
    if (lang === "FA") {
      i18n.changeLanguage("FA");
      document.body.dir = "rtl";
      document.body.className = "bodyRtl";
    }
    if (lang === "EN") {
      i18n.changeLanguage("EN");
      document.body.dir = "ltr";
      document.body.className = "bodyLtr";
    }
  };
  const initLang = () => {
    if (localStorage.lang) {
      changeLanguage(localStorage.lang);
    } else {
      changeLanguage("FA");
    }
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    initLang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return mode === "other" ? (
    <section className="otherLangBox" style={{display:"none"}}>
      <button
        onClick={() => changeLanguage("EN")}
        className={lng === "EN" ? "active" : ""}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("FA")}
        className={lng === "FA" ? "active" : ""}
      >
        FA
      </button>
    </section>
  ) : (
    <section className="langBox" style={{display:"none"}}>
      <button
        onClick={() => changeLanguage("EN")}
        className={lng === "EN" ? "active" : ""}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("FA")}
        className={lng === "FA" ? "active" : ""}
      >
        FA
      </button>
    </section>
  );
}
