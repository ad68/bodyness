/* import { useEffect, useState } from 'react'; */

import Routes from "../routes/index";
import { useTranslation } from "react-i18next";
import LangBox from "../components/LanguageBox";
import { useEffect } from "react";
function App() {
  return (
    <section>
    {/*   <LangBox /> */}
      <Routes />
      {/* <div className={`${lng === "EN" ? "bodyLtr" : "bodyRtl"}`}></div> */}
    </section>
   
  );
}

export default App;
