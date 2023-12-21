import React, { useState, useContext, useEffect } from 'react';
import Pic from '../../../assets/images/roadMap/bmiRange.png';
import bmiBar from '../../../assets/images/roadMap/bmiBar.png';
import weightHeight from '../../../assets/images/roadMap/weightHeight.png';
import Menu from '../../../components/Menu';
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
   <Menu/>
   <section className='roadMapWrapper'>
   <section className="section3">
      <section className="header">
        <span className="levelNumber">3</span>
        <span className="text mr-10">
          BMI.BMR
          <br />
          خود را با یک ماشین حساب بررسی کنید
        </span>
        <img src={Pic} alt="" />
      </section>
      <section className="silverBox">
        <img src={weightHeight} alt="" className="m-auto mt-12 weightHeight" />
        <img src={bmiBar} alt="" className="m-auto mt-20" />
        <section className="flex justify-center rangeInfo mt-6">
          <section>
            <section className="flex justify-start items-center">
              <span className="bullet blue"></span>
              <span className="label">زیر 18.5</span>
            </section>
            <section className="flex justify-start items-center mt-2">
              <span className="bullet green"></span>
              <span className="label">بین 18.5 و 24.9</span>
            </section>
            <section className="flex justify-start items-center  mt-2">
              <span className="bullet yellow"></span>
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
      <section className="grid grid-cols-2 gap-4 duesBox">
        <section>
          <section className="title">
            <span className="bullet yellow"></span>
            <span>عوارض بالا بودن BMI چیست؟</span>
          </section>
          <p className="mt-5">
            فرادی که طبق معیار BMI دچار اضافه‌وزن هستند (با BMI بیش از 25
            کیلوگرم بر مترمربع)، رژیم غذایی مناسبی رعایت نمی‌کنند و فعالیت و
            تحرک بدنی کافی ندارند، درمعرض خطرات زیر قرار دارند:
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
            <span className="bullet blue"></span>
            <span>عوارض پایین بودن BMI چیست؟</span>
          </section>
          <p className="mt-5">
            افرادی که دچار کمبود وزن هستند ( BMI کمتر از 18.5 کیلوگرم در
            مترمربع)، موادمغذی کافی به بدن‌شون وارد نمی‌شه و اهل ورزش هم نیستن،
            ممکنه دچار سوءتغذیه بشن و به موارد زیر مبتلا بشن:
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
      <section className="dtlBox">
        <span>BMR یا متابولیسم پایه:</span>
        <span className="title">انتخاب بهترین تمرین برای عضله هدف</span>
        <p>
          BMR یا Basal Metabolic Rate یا متابولیسم پایه میزان کالری هست که بدن
          نیاز داره تا برای انجام فعالیت‌های پایه‌ای خودش مانند راه رفتن یا حتی
          نفس کشیدن، گردش خون، تولید سلول‌های خونی، جذب و هضم غذا، سنتز پروتئین
          و انتقال خون بسوزونه.
        </p>
        <span className="title mt-5">محاسبه BMR</span>
        <p>
          روش محاسبه bmr از فرمول های مختلفی بدست میاد ، از جمله معادله
          هریس_بندیکت Harris-Benedict )):
        </p>
        <span className="title mt-5">بانوان</span>
        <p>
          ۴۴۷.۵۹۳ + (x ۹.۲۴۷ وزن به کیلوگرم) + (۳.۰۹۸ x قد به سانتی متر) –
          (۴.۳۳۰ x سن به سال)
        </p>
        <span className="title mt-5">آقایان</span>
        <p>
          ۸۸.۳۶۲ + (x ۱۳.۳۹۷ وزن به کیلوگرم) + (۴.۷۹۹ x قد به سانتی‌متر) –
          (۵.۶۷۷ x سن به سال)
        </p>
        <span className="title mt-5"></span>
        <span>میفلین جوئر (Mifflin-st jeor)</span>
        <span className="title mt-5">آقایان</span>
        <p>BMR =(10 × وزن کیلوگرم) +(6.25 × قد سانتی‌متر) - (5 × سن سال) +5</p>
        <span className="title mt-5">بانوان</span>
        <p>
          BMR =(10 × وزن کیلوگرم) +(6.25 × قد سانتی‌متر) - (5 × سن سال) -161
        </p>
        <p>
          البته این نکته رو هم بگم که همه این فرمول ها یک عدد تقریبی به ما میده
          که برای هرکس میتونه متفات باشه برای همین در اپلیکیشن بادینس اگر شما پک
          1 ماهه خریداری کنید ، برنامه غذایی 2 ماهه دریافت می کنید چون در ماه
          اول در حال آزمون خطای واقعی نرخ متابولیسم هستیم.
        </p>
        <span className="title mt-5">
          چه مواردی در میزان متابولیسم پایه تاثیرگذار است؟
        </span>
        <ul className="mt-6">
          <li>سن</li>
          <li>جنسیت</li>
          <li>استعداد ژنتیکی</li>
          <li>نوع رژیم</li>
          <li>عضله</li>
          <li>مقدار چربی بدن</li>
          <li>دارو ها</li>
          <li>برنامه غذایی</li>
        </ul>
        <span className="title mt-5">بادینس پلنر (PLANER)</span>
        <span>مزایای برنامه ریز تمرین چیست؟</span>
        <p>
          تناسب اندام نیاز به برنامه ریزی ، پایبندی ، استمرار ، ثبت و پایش
          تغییرات از روز اول تا رسیدن به اهدف شما داره. پلنر به شما در ایجاد
          خلاقیت بیشتر کمک می کنه. بسیاری از کارشناسان تناسب اندام توصیه می کنن
          که یک برنامه ایجاد کنی، تا بتونی پیشرفتی رو که انجام دادی ببینی، و به
          آرامی به اهداف خود برسی.
        </p>
        <p>
          پیشنهاد میکنیم یک دوره 6 تا رسیدن به اهدافتون برنامه ریزی کنید. دلیلشم
          اینه که نه اونقدر کوتاهه که نشه انجامش داد و نه اونقدر بلند مدته که
          شما رو نسبت به هدفی که داری خسته کنه. پلنر به شما کمک میکنه تا نسخه ای
          کامل تر از خودت بسازی.
        </p>
        <span>تاریخچه اندازه گیری:</span>
        <p>
          این تاریخچه کمک میکنه تا میزان پیشرفت خودت رو برای هر ماه و نهایتا ماه
          ششم نسبت به ماه اول بسنجی.
        </p>
        <span>ثبت رکورد وزنه ها:</span>
        <p>
          اضافه بار تدریجی در تمرینات بسیار فاکتور مهمی هست و شما می تونی میزان
          وزنه خودت رو در بخش های مختلف پلنر ثبت کنی و میزان پیشرفتت رو پایش
          کنی.
        </p>
        <span>ثبت مکمل های ورزشی و غذایی:</span>
        <p>در این بخش می تونی میزان و ساعت مصرف مکمل هارو یادداشت کنی</p>
        <span>هدف گذاری کوتاه مدت ، میان مدت و بلند مدت :</span>
        <p>حتما برای برنامه ورزشی و رژیم غذایت هدف گذاری کن تا به نتیجه برسی</p>
        <span>ثبت نقاط ضعف و قدرت:</span>
        <p>ثبت نقاط ضعف و قدرت هم به شما و هم به مربی شما کمک زیادی خواهد کرد تا برنامه</p>
      </section>
    </section>
   </section>
   </>
  );
}
