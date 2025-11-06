import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PinRedeem from "./components/PinRedeem";
import ResultPage from "./pages/ResultPage";
import TheoryPage from "./pages/TheoryPage";
import './styles.css';
function App(){ return (<BrowserRouter><Routes><Route path='/' element={<LandingPage/>} /><Route path='/redeem' element={<PinRedeem/>} /><Route path='/result/:id' element={<ResultPage/>} /><Route path='/theory' element={<TheoryPage/>} /></Routes></BrowserRouter>); }
const root = createRoot(document.getElementById('root')); root.render(<App />);
