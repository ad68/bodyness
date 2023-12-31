import React, { useState, useContext, useEffect } from 'react';
import Menu from '../../../components/Menu';
import Pic from '../../../assets/images/roadMap/sec1Header.png';
import vector1 from '../../../assets/images/roadMap/Vector1.png';
import vector2 from '../../../assets/images/roadMap/Vector2.png';
import vector3 from '../../../assets/images/roadMap/Vector3.png';
import vector4 from '../../../assets/images/roadMap/Vector4.png';
import vector5 from '../../../assets/images/roadMap/Vector5.png';
import fat from '../../../assets/images/roadMap/fat.png';
import target from '../../../assets/images/roadMap/target.png';
import calory from '../../../assets/images/roadMap/calory.png';
import plate from '../../../assets/images/roadMap/plate.png';
import damble from '../../../assets/images/roadMap/damble.png';
import muscle from '../../../assets/images/roadMap/muscle.png';

import { Link } from 'react-router-dom';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

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
      <section className="roadMapWrapper">
        <section className="section1">
          <section className="header">
            <span className="levelNumber">1</span>
            <span className="text mr-10">
              غذای سالم
              <br />
              به بهترین شکل زندگی خودت برس!
            </span>
            <img src={Pic} alt="" />
          </section>
          <section
            className="flex justify-center items-end relative roadBox m-auto mt-36"
            style={{ direction: 'ltr' }}
          >
            <header>
              <span className='title'>عنوان</span>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
              </p>
            </header>
            <section className="vec1">
              <img src={vector1} alt="" />
              <img src={fat} alt="" className="fat" />
              <img src={target} alt="" className="icon" />
              <section className="infoBox">
                <section className="title">
                  <span className="number">1</span>
                  <span className="text">عنوان</span>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                    استفاده از طراحان گرافیک است، ه

                  </p>
                </section>
              </section>
            </section>
            <section className="vec2">
              <img src={vector2} alt="" />
              <img src={calory} alt="" className="icon" />
              <section className="infoBox">
                <section className="title">
                  <span className="number">2</span>
                  <span className="text">عنوان</span>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله

                  </p>
                </section>
              </section>
            </section>
            <section className="vec3">
              <img src={vector3} alt="" />
              <img src={plate} alt="" className="icon" />
              <section className="infoBox">
                <section className="title">
                  <span className="number">3</span>
                  <span className="text">عنوان</span>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله

                  </p>
                </section>
              </section>
            </section>
            <section className="vec4">
              <img src={vector4} alt="" />
              <img src={damble} alt="" className="icon" />
              <section className="infoBox">
                <section className="title">
                  <span className="number">4</span>
                  <span className="text">عنوان</span>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله

                  </p>
                </section>
              </section>
            </section>
            <section className="vec5">
              <img src={vector5} alt="" />
              <img src={muscle} alt="" className="muscle" />
              <section className="infoBox">
                <section className="title">
                  <span className="number">5</span>
                  <span className="text">عنوان</span>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                  </p>
                </section>
              </section>
            </section>
          </section>
          <Link className='letsGoBtn' to="/basicInfo">امروز شروع کن</Link>
        </section>
      </section>
    </>


  );
}
