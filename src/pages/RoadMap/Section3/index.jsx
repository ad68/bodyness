import React, { useState, useContext, useEffect } from 'react';
import Menu from '../../../components/Menu';
import Tab1Img from '../../../assets/images/roadMap/tab4.png';
import Tab2Img from '../../../assets/images/roadMap/tab3.png';
import Tab3Img from '../../../assets/images/roadMap/tab2.png';
import Tab4Img from '../../../assets/images/roadMap/tab1.png';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';
import Tab4 from './tabs/Tab4';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(1);
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
      <section className="roadMapWrapper  pt-[96px] pb-[120px] xl:max-w-screen-xl 2xl:max-w-screen-2xl ">
        <section className="section3 max-w-[1303px] m-auto w-full mt-10">
          <section className="tabBtnWrapper flex flex-row justify-between">
            <section
              className={`tabBtn ${activeTab === 1 && 'bg-[#ECF2FC]'}`}
              onClick={() => setActiveTab(1)}
            >
              <img src={Tab1Img} alt="" />
              {activeTab === 1 && <button className="btn bg-[#6C95FF]">آب شمار</button>}
             
            </section>
            <section
              className={`tabBtn ${activeTab === 2 && 'bg-[#FEF8E266]'}`}
              onClick={() => setActiveTab(2)}
            >
              <img src={Tab2Img} alt="" />
              {activeTab === 2 && <button className="btn bg-[#FEB137]">شاخص توده بدنی</button>}
            </section>
            <section
              className={`tabBtn ${activeTab === 3 && 'bg-[#ffe8e1]'}`}
              onClick={() => setActiveTab(3)}
            >
              <img src={Tab3Img} alt="" />
              {activeTab === 3 && <button className="btn bg-[#FF9170]">توده ی بدون چربی LMB</button>}
            </section>
            <section
              className={`tabBtn ${activeTab === 4 && 'bg-[#926cff14]'}`}
              onClick={() => setActiveTab(4)}
            >
              <img src={Tab4Img} alt="" />
              {activeTab === 4 && <button className="btn bg-[#a347f1]">بادینس پلنر</button>}
            </section>
          </section>
          <section
            className={`tabWrapper ${
              activeTab === 1
                ? 'bg-[#ECF2FC]'
                : activeTab === 2
                ? 'bg-[#FEF8E266]'
                : activeTab === 3
                ? 'bg-[#ffe8e1]'
                : activeTab === 4
                ? 'bg-[#926cff14]'
                : ''
            }`}
          >
            {activeTab === 1 && <Tab1 />}
            {activeTab === 2 && <Tab2 />}
            {activeTab === 3 && <Tab3 />}
            {activeTab === 4 && <Tab4 />}
          </section>
        </section>
      </section>
    </>
  );
}
