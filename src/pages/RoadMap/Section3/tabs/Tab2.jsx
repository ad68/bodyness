import React, { useState, useContext, useEffect } from 'react';
import MaleIcon from '../../../../assets/images/home/male.svg';
import FemaleIcon from '../../../../assets/images/home/female.svg';
import HeightPicker from './components/HeightPicker';
import WeightPicker from './components/WeightPicker';
import AgePicker from './components/AgePicker';
import InnerTab from './components/InnerTabBtn';
import Pic from '../../../../assets/images/roadMap/bmiRange.png';
import bmiBar from '../../../../assets/images/roadMap/bmiBar.png';
import weightHeight from '../../../../assets/images/roadMap/weightHeight.png';
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
      <section className="w-full max-w-[1218px] h-[325px] bg-white rounded-2xl mt-8 p-8">
        <span className="flex justify-center items-end pb-6 font-bold text-[18px] w-[220px] h-[80px] m-auto mt-[-80px] bg-[#fffcf3] rounded-[40px]">
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
      <section className="flex">
        <section className="w-[280px] relative mt-10">
          <section
            onClick={() => setActiveTab(1)}
            className={`absolute w-[238px] h-[67px] flex cursor-pointer justify-center items-center top-0 right-0 text-[18px] font-extrabold text-center z-1 ${
              activeTab === 2 ? 'text-black' : 'text-white'
            }`}
          >
            شاخص توده بدنی BMI
          </section>
          <InnerTab fill={`${activeTab === 1 ? '#FEB137' : '#fffcf3'}`} />
        </section>
        <section className="w-[280px] relative mt-10">
          <section
            onClick={() => setActiveTab(2)}
            className={`absolute w-[238px] h-[67px] flex justify-center cursor-pointer items-center top-0 right-0 text-[18px] font-extrabold text-center z-1 ${
              activeTab === 1 ? 'text-black' : 'text-white'
            }`}
          >
            متابولیسم پایه BMR
          </section>
          <InnerTab
            fill={`${activeTab === 2 ? '#FEB137' : '#fffcf3'}`}
            onClick={() => setActiveTab(2)}
          />
        </section>
      </section>
      {activeTab === 1 && (
        <section className="w-[1218px] mt-[-1px] bg-[#FEB137] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] tab4 p-10">
          <section className="bg-white p-12 rounded-[24px] text-[16px] font-normal text-[#3E4151] text-justify">
            <section className="">
              <section>
                <img src={bmiBar} alt="" className="m-auto mt-4" />
                <section className="flex justify-center rangeInfo mt-6">
                  <section>
                    <section className="flex justify-start items-center">
                      <span className="w-[17px] h-[17px] bg-[#358CFE] rounded-full ml-2"></span>
                      <span className="label">زیر 18.5</span>
                    </section>
                    <section className="flex justify-start items-center mt-2">
                      <span className="w-[17px] h-[17px] bg-[#44DFD3] rounded-full ml-2"></span>
                      <span className="label">بین 18.5 و 24.9</span>
                    </section>
                    <section className="flex justify-start items-center  mt-2">
                      <span className="w-[17px] h-[17px] bg-[#FEDF6B] rounded-full ml-2"></span>
                      <span className="label">بین 25 و 29.9</span>
                    </section>
                  </section>
                  <section className="mr-10">
                    <section>
                      <strong>محدوده کمبود وزن</strong>
                    </section>
                    <section className="flex justify-start items-center mt-2">
                      <strong>محدوده وزن سالم</strong>
                    </section>
                    <section className="flex justify-start items-center mt-2">
                      <strong>محدوده اضافه وزن</strong>
                    </section>
                  </section>
                </section>
              </section>
              <section className="text-[16px] font-normal mt-5">
                <p>BMI : شاخص توده بدنی</p>
                <p>
                  شاخص توده بدنی (BMI)، مخفف عبارت انگلیسی Body Mass Index است
                  که برای تعیین رده وزنی افراد مختلف به‌کار گرفته می‌شه. فرمول
                  این شاخص از تقسیم وزن فرد برحسب کیلوگرم بر مجذور قد برحسب متر
                  به‌دست می‌آید. BMI .یک روش غربال‌گری ارزان و آسان برای
                  دسته‌بندی وزن در رده‌های کم‌وزنی، وزن سالم، اضافه‌وزن و چاقی
                  هست. BMI به‌طورمستقیم چربی بدن رو اندازه‌گیری نمی‌کنه اما با
                  معیارهای مستقیم‌تر اندازه‌گیری چربی بدن همبستگی متوسطی
                  داره.بهترین وضعیت BMI نرمال چند است؟BMI ایده‌آل برای اغلب
                  بزرگ‌سالان درمحدوده 18.5 تا 24.9 هست، اما درمورد کودکان و
                  جوانان 2 تا 18 ساله برای محاسبه BMI باید سن، جنسیت، قد و وزن
                  درنظر گرفته بشه. به‌طورکلی، BMI اغلب افراد در این محدوده‌ها
                  قرار می‌گیره
                </p>
              </section>
              <section className="grid grid-cols-2 gap-4 mt-10">
                <section>
                  <section>
                    <span className="inline-block align-middle w-[17px] h-[17px] bg-[#FEDF6B] rounded-full ml-2"></span>
                    <span className="font-bold">عوارض بالا بودن BMI چیست؟</span>
                  </section>
                  <p className="mt-5">
                    افرادی که طبق معیار BMI دچار اضافه‌وزن هستند (با BMI بیش از
                    25 کیلوگرم بر مترمربع)، رژیم غذایی مناسبی رعایت نمی‌کنند و
                    فعالیت و تحرک بدنی کافی ندارند، درمعرض خطرات زیر قرار دارند:
                  </p>
                  <ul>
                    <li>کلسترول خون بالا یا سایر اختلالات چربی</li>
                    <li>دیابت نوع ۲</li>
                    <li>بیماری قلبی</li>
                    <li>سکته مغزی یا قلبی</li>
                    <li>فشارخون بالا سرطان‌های خاص</li>
                    <li>بیماری کیسه صفرا</li>
                    <li>آپنه خواب و خروپف</li>
                    <li>مرگ زودرس</li>
                    <li>آرتروز و بیماری مفصلی</li>
                  </ul>
                </section>
                <section>
                  <section className="title">
                    <span className="inline-block align-middle w-[17px] h-[17px] bg-[#358CFE] rounded-full ml-2"></span>
                    <span className="font-bold">
                      عوارض پایین بودن BMI چیست؟
                    </span>
                  </section>
                  <p className="mt-5">
                    افرادی که دچار کمبود وزن هستند ( BMI کمتر از 18.5 کیلوگرم در
                    مترمربع)، موادمغذی کافی به بدن‌شون وارد نمی‌شه و اهل ورزش هم
                    نیستن، ممکنه دچار سوءتغذیه بشن و به موارد زیر مبتلا بشن:
                  </p>
                  <ul>
                    <li>خطر ضعف عملکرد ایمنی بدن</li>
                    <li>بیماری‌های تنفسی</li>
                    <li>بیماری‌های گوارشی</li>
                    <li>سرطان</li>
                    <li>پوکی استخوان</li>
                    <li>نازایی</li>
                    <li>افسردگی</li>
                  </ul>
                </section>
              </section>
            </section>
          </section>
        </section>
      )}
      {activeTab === 2 && (
        <section className="w-[1218px] mt-[-1px] bg-[#FEB137] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] tab4 p-10">
          <section className="bg-white p-12 rounded-[24px] text-[16px] font-normal text-[#3E4151] text-justify">
            <section>
              <span>BMR یا متابولیسم پایه:</span>
              <p>
                سوالی که ممکن است ذهن خیلی‌ها را درگیر کنه، اینه که در طول روز
                برحسب میزان فعالیت روزانه و هفتگی، چه مقدار کالری باید مصرف کنم
                تا چاق شوم؟ لاغر شوم؟ یا وزنم رو ثابت نگه دارم؟
              </p>
              <p>
                BMR یا Basal Metabolic Rate یا متابولیسم پایه میزان کالری هست که
                بدن نیاز داره تا برای انجام فعالیت‌های پایه‌ای خودش مانند راه
                رفتن یا حتی نفس کشیدن، گردش خون، تولید سلول‌های خونی، جذب و هضم
                غذا، سنتز پروتئین و انتقال خون بسوزونه.
              </p>
              <span>محاسبه BMR</span>
              <p>
                روش محاسبه bmr از فرمول های مختلفی بدست میاد ، از جمله معادله
                هریس_بندیکت Harris-Benedict )):
              </p>

              <span>بانوان</span>
              <p>
                ۴۴۷.۵۹۳ + (x ۹.۲۴۷ وزن به کیلوگرم) + (۳.۰۹۸ x قد به سانتی متر) –
                (۴.۳۳۰ x سن به سال)
              </p>
              <span>آقایان</span>
              <p>
                ۸۸.۳۶۲ + (x ۱۳.۳۹۷ وزن به کیلوگرم) + (۴.۷۹۹ x قد به سانتی‌متر) –
                (۵.۶۷۷ x سن به سال)
              </p>
              <span>و میفلین جوئر (Mifflin-st jeor)</span>
              <br />
              <span>آقایان</span>
              <p>
                BMR =(10 × وزن کیلوگرم) +(6.25 × قد سانتی‌متر) - (5 × سن سال) +5
              </p>
              <span>بانوان</span>
              <p>
                BMR =(10 × وزن کیلوگرم) +(6.25 × قد سانتی‌متر) - (5 × سن سال)
                -161
              </p>
              <p>
                البته این نکته رو هم بگم که همه این فرمول ها یک عدد تقریبی به ما
                میده که برای هرکس میتونه متفات باشه برای همین در اپلیکیشن بادینس
                اگر شما پک 1 ماهه خریداری کنید ، برنامه غذایی 2 ماهه دریافت می
                کنید چون در ماه اول در حال آزمون خطای واقعی نرخ متابولیسم
                هستیم.چه مواردی در میزان متابولیسم پایه تاثیرگذار است؟
              </p>

              <ol class="list-decimal mr-3">
                <li>سن</li>
                <li>جنسیت</li>
                <li>استعداد ژنتیکی</li>
                <li>نوع رژیم</li>
                <li>عضله</li>
                <li>مقدار چربی بدن</li>
                <li>داروها</li>
                <li>برنامه غذایی</li>
              </ol>
            </section>
          </section>
        </section>
      )}
    </>
  );
}
