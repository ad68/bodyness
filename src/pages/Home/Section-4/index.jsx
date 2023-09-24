import React, { useState, useContext, useEffect } from 'react'
import {useTranslation} from 'react-i18next'
import Tools1 from '../../../assets/images/home/tools(1).png'
import Tools2 from '../../../assets/images/home/tools(2).png'
import Tools3 from '../../../assets/images/home/tools(3).png'
import Tools4 from '../../../assets/images/home/tools(4).png'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {t} = useTranslation();
  // ─── States ─────────────────────────────────────────────────────────────────────
 
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
 
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
     <section className='section4'>
       
        <section className='relative'>
        <h2 className='title'>
            {t('Home.ToolsNeed')}
        </h2>
        <img className='tools1' alt="" src={Tools1}/>
        <img alt="" className='tools2' src={Tools2}/>
        <img alt="" className='tools3' src={Tools3}/>
        <img alt="" className='tools4' src={Tools4}/>
        </section>
       
     </section>
  )
}
