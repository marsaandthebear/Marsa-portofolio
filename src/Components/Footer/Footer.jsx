import React from 'react';
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

import Wave from '../../img/wave.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>marsalina85@gmail.com</span>
                <div className="f-icons">
                    {/* Tambahkan tautan untuk setiap ikon */}
                    <a href="https://instagram.com/marsalina85" target="_blank" rel="noopener noreferrer">
                        <Insta color="white" size="3rem" />
                    </a>
                    <a href="https://facebook.com/Marsalina" target="_blank" rel="noopener noreferrer">
                        <Facebook color="white" size="3rem" />
                    </a>
                    <a href="https://github.com/marsaandthebear" target="_blank" rel="noopener noreferrer">
                        <Github color="white" size="3rem" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
