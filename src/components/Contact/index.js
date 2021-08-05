import React from "react";
import './index.css';

import man from '../../assets/images/man.png';
import woman from '../../assets/images/woman.png';
import anonym from '../../assets/images/anonym.png';

const contactImages = {
    'male': man,
    'female': woman,
    'anonym': anonym
};

export default function Contact({firstName, lastName, phone, gender}) {

    return (
        <div className='contact'>
           <div className='contact-inner'>
                <div className='contact-icon'>
                    <img src={contactImages[gender || 'anonym']} className='contact-icon__image' alt='gender'/>
                </div>
                <div className='contact-info'>
                    <div className='contact-info__box contact-fullname'>
                        <span className='first-name'>{firstName}</span>
                        <span className='second-name'>{lastName}</span>
                    </div>
                    <div className='contact-info__box contact-phone'>{phone}</div>
                </div>
           </div>
        </div>
    );
}