import React, { useState, useContext, useEffect } from 'react';
import MaleIcon from '../../../../assets/images/home/male.svg';
import FemaleIcon from '../../../../assets/images/home/female.svg';
import HeightPicker from './components/HeightPicker';
import WeightPicker from './components/WeightPicker';
import AgePicker from './components/AgePicker';
import InnerTab from './components/InnerTabBtn';
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
      <section className="w-full max-w-[1218px] h-[325px] bg-white rounded-2xl mt-8 p-8">
        <span className="flex justify-center items-end pb-6 font-bold text-[18px] w-[220px] h-[80px] m-auto mt-[-80px] bg-[#ffe8e1] rounded-[40px]">
          ورودی اطلاعات
        </span>
        <section className="flex justify-between mt-3">
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
          <section>
            <span className="block color-[#3E4151] font-normal text-[16px] mr-2">
              سن شما
            </span>
            <AgePicker />
          </section>
          <section>
            <span className="block color-[#3E4151] font-normal text-[16px] mr-2">
              قد شما
            </span>
            <HeightPicker />
          </section>
        </section>
        <section className="grid grid-cols-2 mt-10">
          <section>
            <span className="block color-[#3E4151] font-normal text-[16px] mr-2">
              وزن شما
            </span>
            <WeightPicker />
          </section>
          <section className="text-left mt-10">
            <button className="w-[327px] h-[50px] rounded-[12px] font-bold text-white bg-[#a347f1]">
              مشاهده نتایج
            </button>
          </section>
        </section>
      </section>
      <section className="w-[280px] relative mt-10">
        <section className="absolute w-[238px] h-[67px] flex justify-center items-center top-0 right-0 text-[18px] font-extrabold text-center z-1 text-white">
        شاخص توده عضلانی LBM
        </section>
        <InnerTab fill="#FF9170" />
      </section>
      <section className="w-[1218px] mt-[-1px] bg-[#FF9170] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] tab4 p-10">
        <section className="bg-white p-12 rounded-[24px] text-[16px] font-normal text-[#3E4151] text-justify">
          <p>
            وزن یا توده بدون چربی بدن شامل همه اجزا بدن، به جز چربی هست. یعنی
            تمام اعضا، استخوانها، عضلات، خون، پوست و همه چیزهایی که چربی
            ندارن.چه اهمیتی داره؟ اگر در حال کاهش وزن هستی خیلی مهمه که بدونی
            LBM شما قبل و بعد از کاهش وزن چقدره. با محاسبه LBM می‌تونی مطمئن شی
            در حال از دست دان چربی هستی یا اینکه عضلات خودت را می‌سوزونی.
          </p>
          <p>
            اگر به جای چربی،عضلات و سایر اجزا بدنت کاهش وزن پیدا کنه، ظاهر شما
            متناسب به نظر نمی‌رسه و گذشته از اینها ممکنه با خطرات جدی سلامتی
            مواجه بشی.این یعنی رژیم یا ورزش شما کارآیی لازم رو نداره.
          </p>
          <p>
            به طور کلی، مردان نسبت به زنان نسبت LBM بالاتری دارن. دوز برخی از
            عوامل بیهوشی، به ویژه داروهای محلول در آب، به طور معمول بر اساس LBM
            هست. برخی از معاینات پزشکی هم از مقادیر LBM استفاده می کنن. برای
            تناسب اندام بدن و زندگی روزمره، افراد معمولاً بیشتر از LBM به درصد
            چربی بدن اهمیت می دهن.
          </p>
          <p>
            فرمول های متعددی برای محاسبه LBM هست که ماشین حساب ما نتایج را برای
            همه فرمول ها ارائه می کن
          </p>
          <section className="flex justify-end mt-5">
            <table>
              <thead>
                <tr>
                  <th className="bg-[#FF9170] text-white p-2 rounded-tr-2xl ">
                    body fat
                  </th>
                  <th className="bg-[#FF9170] text-white p-2 border-r border-white">
                    lean body mass
                  </th>
                  <th className="bg-[#FF9170] text-white p-2 rounded-tl-2xl border-r border-white">
                    formula
                  </th>
                </tr>
              </thead>
              <tbody className='text-center text-[14px]'>
                <tr className='bg-[#3E415105]'>
                  <td>20%</td>
                  <td className='border-r border-[#FF9170]'>127.4 lbs (80%)</td>
                  <td className='border-r border-[#FF9170]'>Boer</td>
                </tr>
                <tr className='bg-[#FFF2EE]'>
                  <td>19%</td>
                  <td className='border-r border-[#FF9170]'>129.0 lbs (81%)</td>
                  <td className='border-r border-[#FF9170]'>James</td>
                </tr>
                <tr className='bg-[#3E415105]'>
                  <td>25%</td>
                  <td className='border-r border-[#FF9170]'>120.4 lbs (75%)</td>
                  <td className='border-r border-[#FF9170]'>hume</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </>
  );
}
