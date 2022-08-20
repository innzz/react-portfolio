import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact,faGitAlt,faHtml5,faCss3,faJsSquare,faNode} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import Loader from 'react-loaders'

function About() {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
    }, [])
  return (
    <>
    <div className='container about-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A','b','o','u','t',' ','m','e']}
                idx={15} />
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit id iure vel voluptate corporis illum, cum aut assumenda laboriosam asperiores, reiciendis quisquam, amet saepe nesciunt! Perferendis minima rerum minus alias.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis in omnis quos voluptatum alias excepturi at odio consequatur corporis provident repellat hic sed qui, dolorem sequi explicabo impedit natus numquam?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora exercitationem quaerat molestiae nostrum placeat numquam.</p>
        </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faNode} color="green" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
            </div>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About