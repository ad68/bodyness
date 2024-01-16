import React, { useState, useContext, useEffect } from 'react';
import InnerTab from './components/InnerTabBtn';
import pic1 from '../../../../assets/images/roadMap/tab4(1).png';
import pic2 from '../../../../assets/images/roadMap/tab4(2).png';
import pic3 from '../../../../assets/images/roadMap/tab4(3).png';
import pic4 from '../../../../assets/images/roadMap/tab4(4).png';
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
      <section className="w-[280px] relative">
        <section className="absolute w-[238px] h-[67px] flex justify-center items-center top-0 right-0 text-[18px] font-extrabold text-center z-1 text-white">
          بادینس پلنر
        </section>
        <InnerTab fill="#a347f1"/>
      </section>
      <section className="mt-[-1px] bg-[#a347f1] rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px] tab4 p-10">
        <section className="bg-white p-12 rounded-[24px]">
          <section className="flex justify-between items-center mt-8">
            <img src={pic4} alt="" className="w-[253px] h-[167px]" />
            <img src={pic3} alt="" className="w-[253px] h-[167px]" />
            <img src={pic2} alt="" className="w-[253px] h-[167px]" />
            <img src={pic1} alt="" className="w-[253px] h-[167px]" />
          </section>
          <section className="flex justify-between mt-10">
            <span className="font-bold text-[16px] mt-3">
              بادینس پلنر (Planner)
            </span>
            <button className="bg-[#a347f1] rounded-[12px] w-[291px] h-[48px] text-white text-[18px] font-extrabold">
              دریافت برنامه
            </button>
          </section>
          <p>مزایای برنامه ریز تمرین چیست؟</p>
          <p className="text-justify">
            تناسب اندام نیاز به برنامه ریزی ، پایبندی ، استمرار ، ثبت و پایش
            تغییرات از روز اول تا رسیدن به اهدف شما داره. پلنر به شما در ایجاد
            خلاقیت بیشتر کمک می کنه. بسیاری از کارشناسان تناسب اندام توصیه می
            کنن که یک برنامه ایجاد کنی، تا بتونی پیشرفتی رو که انجام دادی ببینی،
            و به آرامی به اهداف خود برسی.پیشنهاد میکنیم یک دوره 6 تا رسیدن به
            اهدافتون برنامه ریزی کنید. دلیلشم اینه که نه اونقدر کوتاهه که نشه
            انجامش داد و نه اونقدر بلند مدته که شما رو نسبت به هدفی که داری خسته
            کنه. پلنر به شما کمک میکنه تا نسخه ای کامل تر از خودت بسازی.
          </p>
          <p>تاریخچه اندازه گیری:</p>
          <p>
            این تاریخچه کمک میکنه تا میزان پیشرفت خودت رو برای هر ماه و نهایتا
            ماه ششم نسبت به ماه اول بسنجی.
          </p>
          <p>ثبت رکورد وزنه ها:</p>
          <p>
            اضافه بار تدریجی در تمرینات بسیار فاکتور مهمی هست و شما می تونی
            میزان وزنه خودت رو در بخش های مختلف پلنر ثبت کنی و میزان پیشرفتت رو
            پایش کنی.
          </p>
          <p>ثبت مکمل های ورزشی و غذایی:</p>
          <p>در این بخش می تونی میزان و ساعت مصرف مکمل هارو یادداشت کنی</p>
          <p>هدف گذاری کوتاه مدت ، میان مدت و بلند مدت :</p>
          <p>
            حتما برای برنامه ورزشی و رژیم غذایت هدف گذاری کن تا به نتیجه برسی
          </p>
          <p>ثبت نقاط ضعف و قدرت:</p>
          <p>
            ثبت نقاط ضعف و قدرت هم به شما و هم به مربی شما کمک زیادی خواهد کرد
            تا برنامه های ماه های آینده دقیق تر و حرفه ای تر نسبت به خصوصیات شما
            تنظیم بشه.
          </p>
        </section>
      </section>
    </>
  );
}
