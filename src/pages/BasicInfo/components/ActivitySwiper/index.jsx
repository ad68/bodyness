import React, { useState, useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
/* import NotActive from "../../../../assets/images/basicInfo/notActive.png";
import LightlyActive from "../../../../assets/images/basicInfo/LightlyActive.png";
import ModeActive from "../../../../assets/images/basicInfo/modeActive.png";
import VeryActive from "../../../../assets/images/basicInfo/veryActive.png"; */
import NotActive from "../../../../assets/images/basicInfo/notActive1.png";
import LightlyActive from "../../../../assets/images/basicInfo/LightlyActive1.png";
import ModeActive from "../../../../assets/images/basicInfo/modeActive1.png";
import VeryActive from "../../../../assets/images/basicInfo/veryActive1.png";
import VeryActive2 from "../../../../assets/images/basicInfo/veryActive11.png";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveSlide ,setStep,activeSlide}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const nextBtn=useRef()
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [swipers, setSwipers] = useState(null)

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const slideTo = (index) => swipers.slideTo(index);
  //
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(()=>{
      if(swipers){
        slideTo(activeSlide-1)
      }
     
     },[activeSlide])
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    /*     <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={(e) => setActiveSlide(e.activeIndex + 1)}
    >
      <SwiperSlide>
        <section className="myRing">
          <img src={NotActive} alt="" />
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="myRing">
          <img src={LightlyActive} alt="" />
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="myRing">
          <img src={ModeActive} alt="" />
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="myRing">
          <img src={VeryActive} alt="" />
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="myRing">
          <img src={VeryActive} alt="" />
        </section>
      </SwiperSlide>
    </Swiper> */
    <>
        <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSwiper={setSwipers}
      onSlideChange={(e) => setActiveSlide(e.activeIndex + 1)}
    >
      <SwiperSlide>
      <img src={NotActive} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={LightlyActive} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={ModeActive} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={VeryActive} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={VeryActive2} alt="" />
      </SwiperSlide>
    </Swiper>
    
    </>

  );
}
