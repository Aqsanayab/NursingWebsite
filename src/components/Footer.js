import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h2 className="footer-heading">ADEX</h2>
                    {/* <h2 className="footer-heading" style={{ fontSize: '3rem' }}>ADEX </h2> */}
                    <p className="footer-subheading">
                        When you join ADEX Medical Staffing, you’re joining a team dedicated to your continuous support while emigrating to and living in the US.
                    </p>
                    <div className="social-icons">
                        <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                            <img src="https://img.icons8.com/ios/50/ffffff/instagram-new.png" alt="Instagram" />
                        </a>
                        <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
                            <img src="https://img.icons8.com/ios/50/ffffff/facebook-new.png" alt="Facebook" />
                        </a>
                        <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                            <img src="https://img.icons8.com/ios/50/ffffff/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href="https://youtube.com" className="social-icon" aria-label="YouTube">
                            <img src="https://img.icons8.com/ios/50/ffffff/youtube.png" alt="YouTube" />
                        </a>
                        <a href="https://tiktok.com" className="social-icon" aria-label="TikTok">
                            <img src="https://img.icons8.com/ios/50/ffffff/tiktok.png" alt="TikTok" />
                        </a>
                    </div>
                </div>
                <div className="footer-column">
                    <h2 className="footer-heading">Contact Information</h2>
                    <p className="footer-subheading">
                       <b style={{ fontSize: '1.1.5rem' }}>Phone:</b> 123-456-7890<br />
                       <b style={{ fontSize: '1.1.5rem' }}>Location:</b> 1234 Medical St, City, Country<br />
                       <b style={{ fontSize: '1.1.5rem' }}>Email:</b> contact@adexmedical.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
