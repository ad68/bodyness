import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BasicInfo from "../pages/BasicInfo";
import CommingSoon from "../pages/ComingSoon";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
 
export default function Index() {
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <Routes>
      <Route index element={<CommingSoon />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/BasicInfo" element={<BasicInfo />} />
    </Routes>
  );
}