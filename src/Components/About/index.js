import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact,faGit,faHtml5,faCss3,faJsSquare} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

function About() {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
    }, [])
  return (
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
                    <FontAwesomeIcon icon={faReact} color="#DD0031" />
                </div>
                <div className="face1">
                    <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
                </div>
                <div className="face1">
                    <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                </div>
                <div className="face1">
                    <FontAwesomeIcon icon={faCss3} color="#DD0031" />
                </div>
                <div className="face1">
                    <FontAwesomeIcon icon={faGit} color="#DD0031" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About