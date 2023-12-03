import React, { useState, useContext, useEffect } from 'react';

import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import Light from '../../../assets/images/basicInfo/light.png';
import Step from '../../../assets/images/basicInfo/step1L.png';
import Progress from '../components/Progress';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setStep, activeStep }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { t } = useTranslation();
  const monthes = [
    { value: 1, label: 'فروردین' },
    { value: 2, label: 'اردیبهشت' },
    { value: 3, label: 'خرداد' },
    { value: 4, label: 'تیر' },
    { value: 5, label: 'مرداد' },
    { value: 6, label: 'شهریور' },
    { value: 7, label: 'مهر' },
    { value: 8, label: 'آبان' },
    { value: 9, label: 'آذر' },
    { value: 10, label: 'دی' },
    { value: 11, label: 'بهمن' },
    { value: 12, label: 'اسفند' },
  ];

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [year, setYear] = useState('');
  const [years, setYears] = useState([]);
  const [day, setDay] = useState('');
  const [days, setDays] = useState([]);
  const [month, setMonth] = useState('');

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  useEffect(() => {
    let myYears = [];
    let myDays = [];
    for (var i = 1300; i <= 1402; i++) {
      myYears.push({ value: i, label: String(i) });
    }
    setYears(myYears);
    for (var i = 1; i <= 31; i++) {
      myDays.push({ value: i, label: String(i) });
    }
    setDays(myDays);
  }, []);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Progress stepPic={Step} activeStep={activeStep} setStep={setStep} />
      <span className="block text-center title mt-7">
        {t('Basic.WhatsAge')}
      </span>
      <section className="help flex justify-center items-center p-3 mt-7">
        <img src={Light} alt="" />
        <p>{t('Basic.AgeHelp')}</p>
      </section>
      <section
        style={{ width: 1000, maxWidth: '100%', margin: 'auto', marginTop: 50 }}
      >
        <section className="grid grid-cols-3 gap-4 text-center">
          <Select
            value={day}
            onChange={setDay}
            options={days}
            placeholder="روز"
          />
          <Select
            value={month}
            onChange={setMonth}
            options={monthes}
            placeholder="ماه"
          />
          <Select
            value={year}
            onChange={setYear}
            options={years}
            placeholder="سال"
          />
        </section>
      </section>

      <button className="letStartBtn" onClick={() => setStep(3)}>
        {t('Basic.Next')}
      </button>
    </>
  );
}
