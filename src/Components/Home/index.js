import React from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/I-icon.svg';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const Home = ()=> {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['n','z','a','m','a','m'];
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, [])
  
  return (
    <div className='container home-page'>
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
            <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
            </h1>
            <h2>Full-Stack Developer / Javascript Expert</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />l
    </div>
  )
}

export default Home