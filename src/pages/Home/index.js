import React, { useEffect, useState } from "react";
import Section1 from "./Section-1";
import Section2 from "./Section-2";
import Section3 from "./Section-3";
import Section4 from "./Section-4";
import Section5 from "./Section-5";
import Loading from "../../components/Loading";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  // This will run one time after the component mounts
  useEffect(() => {
    const showLoading = () => {
      setLoading(true);
    };
    if (document.readyState === "complete") {
      showLoading();
    } else {
      window.addEventListener("load", showLoading);
      return () => window.removeEventListener("load", showLoading);
    }
  }, []);

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="homeWrapper">
      {loading ? "" : <Loading />}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </section>
  );
}
