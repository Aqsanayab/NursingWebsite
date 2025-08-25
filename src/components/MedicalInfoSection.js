import React from 'react';
import './MedicalInfoSection.css'; 
import MedicalNurse from '../assets/medical-nurse.jpg';

const MedicalInfoSection = () => {
  return (
    <section className="medical-info-section">
      <h1 className="heading">What Makes J&D Homecare Agency Unique</h1>
      <div className="lower-container">
        <div className="info-columns">
          <div className="info-column">
            <h2>Pre-Deployment</h2>
            <p>J&D Medical Staffing provides thorough training and orientation to ensure candidates are fully prepared before starting their roles.</p>
          </div>
          <div className="info-column">
            <h2>Post-Deployment</h2>
            <p>After deployment, we offer ongoing support and regular check-ins to ensure continued success and satisfaction in the role.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={MedicalNurse} alt="Nurse" />
        </div>
      </div>
    </section>
  );
};

export default MedicalInfoSection;
