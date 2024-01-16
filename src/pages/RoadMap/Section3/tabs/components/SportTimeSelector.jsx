import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [active, setActive] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  const { t } = useTranslation();
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
    
      <section className="SportTimeSelector mt-4">
        
        <span
          className={`item ${active === 1 ? 'active' : ''}`}
          onClick={() => setActive(1)}
        >
          <span className="core"></span>
        </span>

        <span
          className={`item ${active === 2 ? 'active' : ''}`}
          onClick={() => setActive(2)}
        >
          <span className="core"></span>
        </span>
        <span
          className={`item ${active === 3 ? 'active' : ''}`}
          onClick={() => setActive(3)}
        >
          <span className="core"></span>
        </span>
        <span
          className={`item ${active === 4 ? 'active' : ''}`}
          onClick={() => setActive(4)}
        >
          <span className="core"></span>
        </span>
        <span
          className={`item ${active === 5 ? 'active' : ''}`}
          onClick={() => setActive(5)}
        >
          <span className="core"></span>
        </span>
        <span
          className={`item ${active === 6 ? 'active' : ''}`}
          onClick={() => setActive(6)}
        >
          <span className="core"></span>
        </span>
        <section className="absolute flex justify-between w-[336px] top-7 text-[12px]">
          <span className="block w-[46px] h-[40px] font-bold text-[#3E4151] text-center">
            100 تا 120
            <br/>
            دقیقه
          </span>
          <span className="block w-[46px] h-[40px] font-bold text-[#3E4151] text-center">
            80 تا 100
            <br/>
            دقیقه
          </span>
          <span className="block w-[46px] h-[40px] font-bold text-[#3E4151] text-center">
            60 تا 80
            <br/>
            دقیقه
          </span>
          <span className="block w-[46px] h-[40px] font-bold text-[#3E4151] text-center">
            40 تا 60
            <br/>
            دقیقه
          </span>
          <span className="block w-[46px] h-[40px] font-bold text-[#3E4151] text-center">
            20 تا 40
            <br/>
            دقیقه
          </span>
          <span className="block w-[46px] h-[40px] font-bold text-[#3E4151] text-center">
            0 تا 20
            <br/>
            دقیقه
          </span>
        </section>
      </section>
    </>
  );
}
