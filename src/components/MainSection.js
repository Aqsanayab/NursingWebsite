import React from 'react';
import './MainSection.css';
import arrowRight from '../assets/arrow-right.png';
import backgroundImage from '../assets/background1.jpg';
import MainNurse from '../assets/your-nurses-image.jpg';

const MainSection = () => {
    return (
        <section className="main-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="main-content">
                <h1> J&D Homecare Agency: Arrive and Thrive</h1>
                <p>Get in touch with us to explore exciting career opportunities at J&D Homecare Agency !!</p>
                <button className="explore-more">
                    EXPLORE MORE <img src={arrowRight} alt="arrow-right" />
                </button>
            </div>
            <div className="nurses-image">
              
            <img src={MainNurse} alt="Nurse" />
            </div>
        </section>
    );
};

export default MainSection;
