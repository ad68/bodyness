import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import BasicInfo from '../pages/BasicInfo';
import CommingSoon from '../pages/ComingSoon';
import RoadMap from '../pages/RoadMap';
import Section1 from '../pages/RoadMap/Section1';
import Section3 from '../pages/RoadMap/Section3';
import Section4 from '../pages/RoadMap/Section4';
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]);
  return (
    <Routes>
      <Route index element={<CommingSoon />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/BasicInfo" element={<BasicInfo />} />
      <Route path="/RoadMap" element={<RoadMap />} />
      <Route path="/RoadMap">
        <Route path="/RoadMap/Section1" element={<Section1 />} />
        <Route path="/RoadMap/Section3" element={<Section3 />} />
        <Route path="/RoadMap/Section4" element={<Section4 />} />
      </Route>
    </Routes>
  );
}
