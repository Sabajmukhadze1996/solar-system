import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Form } from "./components/Form";
import { HomePage } from "./components/HomePage";
import { useEffect } from "react";
import { EarthInfo, JupiterInfo, MarsInfo, MercuryInfo, NeptuneInfo, 
PlutoInfo, SaturnInfo, UranusInfo, VenusInfo } from "./components/ExtraInfoAboutPlanets";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
   window.onload = window.scrollTo(0, 0)
  }, [])
  return (
<BrowserRouter>
<div className="app">
   <Routes>
    <Route path="/*" element={<Form />} />
    <Route path="/home-page" element={<HomePage />}/>
    <Route path="/mars-info" element={<MarsInfo />}/>
    <Route path="/mercury-info" element={<MercuryInfo />}/>
    <Route path="/venus-info" element={<VenusInfo />}/>
    <Route path="/earth-info" element={<EarthInfo />}/>
    <Route path="/jupiter-info" element={<JupiterInfo />}/>
    <Route path="/saturn-info" element={<SaturnInfo />}/>
    <Route path="/uranus-info" element={<UranusInfo />}/>
    <Route path="/neptune-info" element={<NeptuneInfo />}/>
    <Route path="/pluto-info" element={<PlutoInfo />}/>
   </Routes>
   <Footer />
  </div>
</BrowserRouter>
  );
}

export default App;
