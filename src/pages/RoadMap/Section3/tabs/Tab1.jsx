import React, { useState, useContext, useEffect } from 'react';
import MaleIcon from '../../../../assets/images/home/male.svg';
import FemaleIcon from '../../../../assets/images/home/female.svg';
import WeightPicker from './components/WeightPicker';
import Cold from '../../../../assets/images/icon/cold.svg';
import Cloudy from '../../../../assets/images/icon/cloudy.svg';
import Warm from '../../../../assets/images/icon/warm.svg';
import SportTimeSelector from './components/SportTimeSelector';
import InnerTab from './components/InnerTabBtn';
import Glass from '../../../../assets/images/icon/glass.svg';
import Water from '../../../../assets/images/icon/water.svg';
import Bubble from '../../../../assets/images/icon/bubble.png';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
function BubbleItem({value}) {
  return (
      <span  className="flex justify-start items-center mt-1">
        <img className='w-[16px] h-[25px]' src={Bubble} alt="" />
        <span className='mr-1'>{value}</span>
      </span>
  );
}

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
      <section className="w-full max-w-[1218px] h-[325px] bg-white rounded-2xl mt-8 p-8">
        <span className="flex justify-center items-end pb-6 font-bold text-[18px] w-[220px] h-[80px] m-auto mt-[-80px] bg-[#ECF2FC] rounded-[40px]">
          ورودی اطلاعات
        </span>
        <section className="flex justify-between">
          <section className="w-[246px] h-[85px]">
            <span className="block color-[#3E4151] font-normal text-[16px] mr-2">
              جنسیت شما
            </span>
            <section className="w-full flex justify-between mt-4">
              <section className="w-[117px] h-[48px] border rounded-[20px] px-5 flex justify-between items-center cursor-pointer">
                <img src={FemaleIcon} className="h-[28px] w-[26px]" alt="" />
                <span>خانم</span>
              </section>
              <section className="w-[117px] h-[48px] border rounded-[20px] px-5 flex justify-between items-center cursor-pointer">
                <img src={MaleIcon} className="h-[28px] w-[26px]" alt="" />
                <span>آقا</span>
              </section>
            </section>
          </section>
          <section className="w-[294px] h-[85px]">
            <span className="block color-[#3E4151] font-normal text-[16px] mr-2">
              وزن شما
            </span>
            <WeightPicker />
          </section>
        </section>
        <section className="grid grid-cols-3">
          <section className="mt-5 w-[276px] h-[121px]">
            <span className="block color-[#3E4151] font-normal text-[16px] mr-2">
              دمای بدن
            </span>
            <section className="mt-4 flex justify-around">
              <section className="w-[84px] h-[84px] border rounded-[20px] px-5 flex flex-col justify-center items-center cursor-pointer">
                <img alt="" src={Warm} />
                <span className="font-normal text-[16px] mt-[3px]">گرم</span>
              </section>
              <section className="w-[84px] h-[84px] border rounded-[20px] px-5 flex flex-col justify-center items-center cursor-pointer">
                <img alt="" src={Cloudy} />
                <span className="font-normal text-[16px] mt-[11px]">معتدل</span>
              </section>
              <section className="w-[84px] h-[84px] border rounded-[20px] px-5 flex flex-col justify-center items-center cursor-pointer">
                <img alt="" src={Cold} />
                <span className="font-normal text-[16px] mt-[5px]">سرد</span>
              </section>
            </section>
          </section>
          <section>
            <span className="mt-5 block color-[#3E4151] font-normal text-[16px] mr-2">
              زمان ورش شما
            </span>
            <SportTimeSelector />
          </section>

          <section></section>
        </section>
        <section className="text-left">
          <button className="w-[327px] h-[50px] rounded-[12px] font-bold text-white bg-[#a347f1]">
            مشاهده نتایج
          </button>
        </section>
      </section>
      <section className="w-[280px] relative mt-10">
        <section className="absolute w-[238px] h-[67px] flex justify-center items-center top-0 right-0 text-[18px] font-extrabold text-center z-1 text-white">
          آب مصرفی روزانه
        </section>
        <InnerTab fill="#6C95FF" />
      </section>
      <section className="w-[1218px] mt-[-1px] bg-[#6C95FF] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] tab4 p-10">
        <section className="bg-white p-12 rounded-[24px]">
          <section className="grid grid-cols-3">
            <section className="col-span-2">
              <span className="text-[20px] font-bold">
                محاسبه گر آب مصرفی در ورزش چیست؟
              </span>
              <p className="font-normal mt-2 text-[16px]">
                اینجا یادت میندازیم در طول روز چقدر آب خوردی!
                <br />
                شنیدی میگن آب برای سلامتی ضروریه؟
              </p>
            </section>

            <section className="flex justify-between">
              <section>
                <img src={Water} alt="" />
                <span className="block text-center font-normal text-[20px] mt-4">
                  500ml
                </span>
              </section>
              <section>
                <img src={Glass} alt="" />
                <span className="block text-center font-normal text-[20px] mt-2">
                  6 لیوان آب
                </span>
              </section>
            </section>
          </section>
          <section className="grid grid-cols-2 mt-4">
            <section>
              <BubbleItem value="به ایجاد بزاق کمک می کنه" />
              <BubbleItem value="دمای بدن شما را تنظیم می کنه" />
              <BubbleItem value="از بافت ها، نخاع و مفاصل شما محافظت می کنه" />
              <BubbleItem value="به دفع مواد زائد از طریق تعریق، ادرار و مدفوع کمک می کنه" />
              <BubbleItem value="به حداکثر رساندن عملکرد فیزیکی کمک می کنه" />
              <BubbleItem value="به جلوگیری از یبوست کمک می کنه" />
              <BubbleItem value="به هضم غذا کمک می کنه" />
              <BubbleItem value="به جذب مواد مغذی کمک می کنه" />
            </section>
            <section>
              <BubbleItem value="به کاهش وزن کمک می کنه" />
              <BubbleItem value="گردش اکسیژن خون را بهبود می بخشه" />
              <BubbleItem value="به مبارزه با بیماری کمک می کنه" />
              <BubbleItem value="به افزایش انرژی کمک می کنه" />
              <BubbleItem value="به عملکرد شناختی کمک می کنه" />
              <BubbleItem value="به بهبود خلق و خو کمک می کنه" />
              <BubbleItem value="به روشن نگه داشتن پوست کمک می کنه" />
              <BubbleItem value="به جذب مواد مغذی کمک می کنه" />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
