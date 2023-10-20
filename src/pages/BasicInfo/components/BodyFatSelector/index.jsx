import React, { useState, useContext, useEffect } from "react";
import {useTranslation} from 'react-i18next'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setBodyFat }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [active, setActive] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setBodyFat(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

const {t} = useTranslation();
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="bodyFatSelectorBox">
        <section className="labelMin">
        {t("Basic.BodyFat")}
        <br/>
        {"<15%"}

        </section>
        <section className="labelMax">{">40%"}</section>
        <span
          className={`item ${active === 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          <span className="tooltip">{"<15%"}</span>
          <span className="core"></span>
        </span>
        <span
          className={`item ${active === 2 ? "active" : ""}`}
          onClick={() => setActive(2)}
        >
          <span className="core"></span>
          <span className="tooltip">{"15-20%"}</span>
        </span>
        <span
          className={`item ${active === 3 ? "active" : ""}`}
          onClick={() => setActive(3)}
        >
          <span className="core"></span>
          <span className="tooltip">{"21-25%"}</span>
        </span>
        <span
          className={`item ${active === 4 ? "active" : ""}`}
          onClick={() => setActive(4)}
        >
          <span className="core"></span>
          <span className="tooltip">{"26-31%"}</span>
        </span>
        <span
          className={`item ${active === 5 ? "active" : ""}`}
          onClick={() => setActive(5)}
        >
          <span className="core"></span>
          <span className="tooltip">{"31-40%"}</span>
        </span>
        <span
          className={`item ${active === 6 ? "active" : ""}`}
          onClick={() => setActive(6)}
        >
          <span className="core"></span>
          <span className="tooltip" style={{ width: 53, marginLeft: 4 }}>
            {">40%"}
          </span>
        </span>
      </section>
    </>
  );
}
