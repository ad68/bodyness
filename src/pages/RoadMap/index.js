import React, { useState, useContext, useEffect } from 'react';
import Menu from '../../components/Menu';
import Steps from './components/Steps';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [tab, setTab] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Menu />
      <section className="roadMapWrapper">
        <section className="header">
          <span className="levelNumber">4</span>
          <span className="text mr-10">
            شاخص توده بدنی خود را با محاسبه گر <br></br>BMI بررسی کنید
          </span>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <span className="circleGr1"></span>
          <span className="circleGr2"></span>
        </section>
        <Steps tab={tab} />

        {tab === 1 && <Tab1 setTab={setTab}/>}
        {tab === 2 && <Tab2 setTab={setTab}/>}
        {tab === 3 && <Tab3 setTab={setTab}/>}
        {tab === 4 && <Tab4 setTab={setTab}/>}
      </section>
    </>
  );
}
