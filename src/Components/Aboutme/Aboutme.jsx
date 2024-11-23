import React from 'react';
import './Aboutme.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf';

const Aboutme = () => {
    return (
        <div className="aboutme" id='Aboutme'>
            {/* left side */}
            <div className="about">
                <span>About Me</span>
                <spane>
                Mahasiswa semester 3 prodi Teknologi Informasi Universitas 'Aisyiyah Yogyakarta, 
                <br/>
                yang saat ini sedang aktif mencari pengalaman dengan fokus belajar                  
                <br />
                dan meningkatkan skills diindustri digital dan teknologi.
                </spane>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* right side */}
            <div className="cards">
    <div>
        <Card
            emoji={HeartEmoji}
            heading={<span className="special-heading">Basic Knownledge of</span>}
            detail={"Html, Css, JavaScript"}
        />
    </div>
    <div>
        <Card
            emoji={Glasses}
            heading={<span className="special-heading">Design</span>}
            detail={"Figma, Sketch, Photoshop, CorelDraw, Canva"}
        />
    </div>
    <div>
        <Card
            emoji={Humble}
            heading={<span className="special-heading">Soft Skills</span>}
            detail={
                "Problem solving, Teamwork"
            }
        />
    </div>
</div>

        </div>
    );
};

export default Aboutme;
