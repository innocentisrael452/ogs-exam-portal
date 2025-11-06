import React, { useEffect } from "react";
import "../pages/landing.css";
export default function LandingPage(){ useEffect(()=>{ document.title='OGS — Official Exam Portal'; },[]);
  const principalNote = `Welcome to Okrika Grammar School exam portal. Do your best — Rev. Tamunotonye Chukubereduko S.`;
  const proprietorMessage = `Let all OGS students strive for excellence, integrity, and godliness in learning and conduct. You are the light of this generation.`;
  const proprietorSign = `~ Rt. Rev. Dr. Enoch Atuboyedia JP (Bishop, Diocese of Okrika)`;
  return (<div className='container'><header className='ogs-hero'><h1>Okrika Grammar School (OGS) — Exam Portal</h1></header><main><section className='card'><h3>Good luck from the Principal</h3><p>{principalNote}</p></section><section className='card'><h3>From the Proprietor / Visitor</h3><div className='proprietor-card'><div className='img'><img alt='bishop' src='/assets/bishop-placeholder.jpg' style={{width:'100%',height:'100%',objectFit:'cover'}} onError={e=>e.target.style.display='none'} /></div><div className='msg'><h4>Word of Moral Charge</h4><p>{proprietorMessage}</p><div style={{marginTop:10,fontWeight:700}}>{proprietorSign}</div></div></div></section></main></div>); }
