import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo/logoMini.png";
import { useTranslation } from "react-i18next";
import LangBox from "./LanguageBox";
import { Link } from "react-router-dom";
import {baseFileUrl} from '../config'
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
  };
 
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
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
     <section className="container flex items-center">
     <img alt="logo" className="logo" src={baseFileUrl+"/images/logo.png"} />
     <span className="text-black mr-2 font-bold text-[15px]">
            Bodyness
          </span>
        <LangBox />
        <nav className="flex items-center grow justify-center font-bold">
          <Link to="/home" className="font-semibold">
            {t("HomeMenu.Home")}
          </Link>
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
       {/*  <button className="action font-bold">{t("HomeMenu.Login")}</button> */}
        <section className="flex justify-end items-center">
          <button className="bg-purple w-[100px] h-[40px] rounded-full text-white ml-4">
            ثبت نام
          </button>
          <Link to="" className="text-black">
            ورود
          </Link>
        </section>
     </section>
       
      </header>
      <section className="mobileMenu flex md:hidden">
        <LangBox />
      {/*   <img alt="logo" className="logo" src={Logo} /> */}
      </section>
    </>
  );
}
