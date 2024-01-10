import React, { useState, useContext, useEffect } from 'react';
import Steps from './components/Steps';
import Tab1 from './components/Tabs/Tab1';
import Tab2 from './components/Tabs/Tab2';
import Tab3 from './components/Tabs/Tab3';
import Tab4 from './components/Tabs/Tab4';
import Menu from '../../../components/Menu';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const [tab, setTab] = useState(1);
  const [gender, setGender] = useState()
  // ─── States ─────────────────────────────────────────────────────────────────────

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
      <section className='roadMapWrapper'>
        <section className='section4 mt-10'>
        {/*   <section className="header">
            <span className="levelNumber">4</span>
            <span className="text mr-10">انتخاب بهترین تمرین برای عضله هدف</span>
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="circleGr1"></span>
            <span className="circleGr2"></span>
          </section> */}
          <Steps tab={tab} />
          {tab === 1 && <Tab1 setTab={setTab} setGender={setGender}/>}
          {tab === 2 && <Tab2 setTab={setTab}  gender={gender}/> }
          {tab === 3 && <Tab3 setTab={setTab} />}
          {tab === 4 && <Tab4 setTab={setTab} />}
        </section>
      </section>
    </>


  );
}
