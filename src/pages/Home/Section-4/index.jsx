import React from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'
import Tools1 from '../../../assets/images/home/tools(1).png';
import Tools2 from '../../../assets/images/home/tools(2).png';
import Tools3 from '../../../assets/images/home/tools(3).png';
import Tools4 from '../../../assets/images/home/tools(4).png';
import Tools1d from '../../../assets/images/home/sec4Tools(1).png';
import Tools2d from '../../../assets/images/home/sec4Tools(2).png';
import Tools3d from '../../../assets/images/home/sec4Tools(3).png';
import Tools4d from '../../../assets/images/home/sec4Tools(4).png';
import Tools5d from '../../../assets/images/home/sec4Tools(5).png';

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
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
      <section className="section4 hidden md:flex">
        <section className="toolsWrapper rtl:mr-12 ltr:ml-12">
          <section className="toolsBox">
            <img alt="" src={Tools1d} />
            <img alt="" src={Tools2d} />
            <img alt="" src={Tools3d} />
          </section>

          <section className="toolsBox">
            <img alt="" src={Tools4d} />
            <img alt="" src={Tools5d} />
          </section>
        </section>
        <section className="textWrapper">
          <section className="ltr:ml-12 rtl:mr-12 mt-12 stepInfo">
           
            <h2>{t('Home.Improve')}</h2>
            <h3>{t('Home.YourMuscles')}</h3>
            <p>{t('Home.ExperienceBest')}</p>
           <Link to="/roadmap/section3">
           <button className="letStartBtn  px-6 mt-6 text-left  hidden md:block">
                <span className="font-bold">{t('Home.LetsStart')}</span>

                <section className="circle">
                 
                </section>
              </button>
           </Link>
              
            
          </section>
        </section>
      </section>
      <section className="section4 mobile flex md:hidden">
        <section className="toolsWrapperMobile ">
          <h2 className="title">{t('Home.ToolsNeed')}</h2>
          <img className="tools1" alt="" src={Tools1} />
          <img alt="" className="tools2" src={Tools2} />
          <img alt="" className="tools3" src={Tools3} />
          <img alt="" className="tools4" src={Tools4} />
        </section>
        <Link to="/roadmap/section3" className='letStartBtnMobile mt-10 text-center'>
        <button>
          {t('Home.LetsStart')}
        </button>
        </Link>
       
      </section>
    </>
  );
}
