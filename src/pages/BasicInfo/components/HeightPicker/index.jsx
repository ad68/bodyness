import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import Plus from '../../../../assets/images/basicInfo/plus.png'
import Minus from '../../../../assets/images/basicInfo/minus.png'
import Human from '../../../../assets/images/basicInfo/FROM_5_TO_9 4.png'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ value }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const min = 120;
  const max = 220;
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [height, setHeight] = useState(220); /* cm */
  const [ft, setFt] = useState();
  const [unit, setUnit] = useState("cm");
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    let num = String(height * 0.0328084);
    setFt(num.slice(0, 4));
    
  }, [height]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const increaseHeight = () => {
    if (height < max) {
      setHeight(height + 1);
    }
  };
  const decreaseHeight = () => {
    if (height > min) {
      setHeight(height - 1);
    }
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="unitBox">
        <button
          className={`item ${unit === "cm" ? "active" : ""}`}
          onClick={() => setUnit("cm")}
        >
          cm
        </button>
        <button
          className={`item ${unit === "ft" ? "active" : ""}`}
          onClick={() => setUnit("ft")}
        >
          ft
        </button>
      </section>
      <section className="valueChangerBox">
        <button className="operator" onClick={() => decreaseHeight()}>
          <img src={Minus} alt="" />
        </button>
        <section className="text">
          <span className="value">{unit ==="cm" ? height : ft}</span>
          <span className="unit">{unit}</span>
        </section>
        <button className="operator" onClick={() => increaseHeight()}>
        <img src={Plus} alt="" />
        </button>
      </section>
      <section className="rangeWrapper">
      <img src={Human} alt="" className="human" style={{bottom:(height-220)*3}}/>
        <section className="ruler">
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
        </section>
        <input
          type="range"
          min={String(min)}
          max={String(max)}
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
        />
      </section>
    </>
  );
}
