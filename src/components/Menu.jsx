import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo/logo.svg";
import { useTranslation } from "react-i18next";
import LangBox from "./LanguageBox";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
  // ─── States ─────────────────────────────────────────────────────────────────────
  /*  const [backColor, setBackColor] = useState(""); */
  const [menuClass, setMenuClass] = useState("");

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const listenScrollEvent = (e) => {
    if (window.scrollY > 0) {
      setMenuClass("tiny");
    } else {
      setMenuClass("");
    }

    /* {
      setBackColor("#e0c9fc");
    } else if (window.scrollY > document.getElementById("sec2").offsetTop) {
      setBackColor("#f5e170");
    } else if (window.scrollY > document.getElementById("sec3").offsetTop) {
      setBackColor("#eef9ff");
    } else {
      setBackColor("");
    } */
  };
  const setMenuWidth = () => {
    console.log(document.getElementById("section1Body").style.width);
    /* setWidth(document.getElementById("section1Body").style.width) */
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", setMenuWidth);
    console.log(document.getElementById("section1Body").style.width);
  }, []);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <header
        className={`flex items-center hidden md:flex mainMenu ${menuClass}`}
      >
        <img alt="logo" className="logo" src={Logo} />
        <LangBox />
        <nav className="flex items-center grow justify-center font-bold">
          <a href="http://www.google.com" className="font-semibold">
            {t("HomeMenu.Home")}
          </a>
          <a
            href="http://www.google.com"
            className="rtl:mr-7 ltr:ml-7 font-semibold"
          >
            {t("HomeMenu.Sport")}
          </a>
          <a
            href="http://www.google.com"
            className="rtl:mr-7 ltr:ml-7 font-semibold"
          >
            {t("HomeMenu.Diet")}
          </a>
          <a
            href="http://www.google.com"
            className="rtl:mr-7 ltr:ml-7 font-semibold"
          >
            {t("HomeMenu.ContactUs")}
          </a>
          <a
            href="http://www.google.com"
            className="rtl:mr-7 ltr:ml-7 font-semibold"
          >
            {t("HomeMenu.AboutUs")}
          </a>
        </nav>
        <button className="action font-bold">{t("HomeMenu.Login")}</button>
      </header>
      <section className="mobileMenu flex md:hidden">
        <LangBox />
      {/*   <img alt="logo" className="logo" src={Logo} /> */}
      </section>
    </>
  );
}
