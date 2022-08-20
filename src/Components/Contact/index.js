import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import './index.scss';
import { MapContainer } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import {Marker} from 'react-leaflet'
import {Popup} from 'react-leaflet'

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
    }, [])

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm(
            'service_92gozcj',
            'template_7lcp9yq',
            refForm.current,
            '5aAGZKN3MHa-9cKD0'
        ).then(
            ()=>{
                alert('Message successfully sent');
                window.location.reload(false);
            },
            ()=>{
                alert('Failed to send the message, please try again')
            }
        )

    //     emailjs.sendForm('service_92gozcj', 'template_7lcp9yq', refForm.current,'5aAGZKN3MHa-9cKD0')
    // .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //    console.log('FAILED...', error);
    // });
    }
  return (
    <div>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia numquam animi quasi non cum illum possimus nobis ex dolorem! Voluptate quasi ducimus quae eligendi dolore fuga impedit incidunt veniam ipsa.</p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name='name' placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type="email" name='email' placeholder='Email' required/>
                        </li>
                        <li>
                            <input type="text" placeholder='Subject' name='subject' required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value='SEND' />
                        </li>
                    </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Inzamam Pawaskar,
                <br />
                India,
                <br />
                Maharashtra, Mumbai, Sewri, 400015 <br />
                <span>inzamam.pawaskar10@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[19.006636, 72.850175]} zoom={13} >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[19.006636, 72.850175]} >
                    <Popup>Inzamam lives here</Popup>
                </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
    </div>
  )
}

export default Contact