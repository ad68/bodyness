import React, { useState, useContext, useEffect } from 'react';
import './style.css';
import Plus from '../../../../assets/images/basicInfo/plus.png';
import Minus from '../../../../assets/images/basicInfo/minus.png';
import Human from '../../../../assets/images/basicInfo/FROM_5_TO_9 4.png';
import { useTranslation } from 'react-i18next';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ value }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const min = 35;
  const max = 250;
  const { t } = useTranslation();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [height, setHeight] = useState(35); /* cm */
  const [lb, setLb] = useState();
  const [unit, setUnit] = useState('kg');
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    let num = String(height * 0.45359237);
    setLb(num.slice(0, 4));
  }, [height]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  /*  const increaseHeight = () => {
    if (height < max) {
      setHeight(height + 1);
    }
  };
  const decreaseHeight = () => {
    if (height > min) {
      setHeight(height - 1);
    }
  }; */
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="weightPicker">
        <section className="unitBox">
          <button
            className={`item ${unit === 'kg' ? 'active' : ''}`}
            onClick={() => setUnit('kg')}
          >
            kg
          </button>
          <button
            className={`item ${unit === 'lb' ? 'active' : ''}`}
            onClick={() => setUnit('lb')}
          >
            lb
          </button>
        </section>

        <section className="rangeWrapper">
          <section className="wightInfo">
            {unit === 'kg' ? height : lb}
            <span style={{ fontSize: 14 }} className="rtl:mr-2 ltr:ml-2">
              {unit === 'kg' ? t('Basic.Kg') : t('Basic.Lb')}
            </span>
          </section>
          <input
            type="range"
            min={String(min)}
            max={String(max)}
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
          <section className="weightRuler">
            <span className="item" style={{ marginTop: 0 }}></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
           {/*  <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item-big"></span>
            <span className="item"></span>
            <span className="item"></span> */}
          </section>
        </section>
      </section>
    </>
  );
}
