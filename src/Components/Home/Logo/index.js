import React, { useEffect, useRef } from 'react';
import './index.scss';
import LogoI from '../../../assets/images/I-icon.svg';
import DrawSVGPlugin from 'gsap-trial/dist/DrawSVGPlugin';
import gsap from 'gsap-trial';

function Logo() {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
      gsap.registerPlugin(DrawSVGPlugin)

      gsap.timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20
      })

      gsap.fromTo(
        solidLogoRef.current,{
            opacity: 0
        },{
            opacity: 0.1,
            delay: 3,
            duration: 2
        }
      )
    }, [])
    
  return (
    <div className='logo-container' ref={bgRef}>
        <img className='solid-logo' src={LogoI} alt="I" ref={solidLogoRef}/>
        <svg ref={outlineLogoRef} width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 104.5V92H46V29.5H21V17H96V29.5H71V92H96V104.5H21Z" fill="#00FCFC"/>
        <path d="M25 99.5V87H50V24.5H25V12H100V24.5H75V87H100V99.5H25Z" fill="#045581"/>
        <path d="M100 101L96 106L96 101L100 101Z" fill="#00FCFC"/>
        <path d="M20.9783 17.0056L25 10L25 17L20.9783 17.0056Z" fill="#00FCFC"/>
        <path d="M100 24.5L96 29.5L96 24.5L100 24.5Z" fill="#00FCFC"/>
        <path d="M21 92L25 87L25 92L21 92Z" fill="#00FCFC"/>
        <line x1="25" y1="11" x2="100" y2="11" stroke="#045581" stroke-width="2"/>
        <line x1="25" y1="100" x2="100" y2="100" stroke="#045581" stroke-width="2"/>
        <line x1="21" y1="105" x2="96" y2="105" stroke="#00FCFC" stroke-width="2"/>
        </svg>

    </div>
  )
}

export default Logo