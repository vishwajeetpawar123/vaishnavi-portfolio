import React from 'react';
import './ResumeSection.css';
import { motion } from 'framer-motion';


const ResumeSection = () => {
    return (
        <div className="resume-poster">
            <header className="poster-header">
                <div>
                    <h1 className="giant-name">VAISHNAVI<br />PAWAR</h1>
                    <span className="role-tag">GRAPHIC DESIGNER</span>
                    <p className="tagline">"Transforming Ideas Into Visuals"</p>
                    {/* <a href="#contact" className="cta-contact">CONTACT ME</a> */}
                </div>
                {/* High-Quality Hero Vector */}
                <img src="/assets/hero-illustration.png" alt="Professional Avatar" className="hero-illustration" />

            </header>

            <div className="poster-grid">
                <section className="grid-section" data-index="01">
                    <h2>ABOUT ME</h2>
                    <p className="manifesto-text">
                        I’m a graphic designer who loves turning simple ideas into visuals that actually feel something. My work sits somewhere between minimal and expressive. I’m drawn to design that tells a story without trying too hard. Whether it’s branding, packaging, or digital visuals, I focus on creating work that looks good and makes sense. I enjoy experimenting, refining, and finding that one small detail that elevates everything.
                        Outside of pixels and grids, I’m constantly observing textures, colors, everyday moments because that’s where the best ideas usually come from.
                        Still learning, always evolving just trying to make things a little more thoughtful and a lot more interesting.

                    </p>
                    <a href="/resume.pdf" target="_blank" className="cta-download">
                        DOWNLOAD RESUME
                    </a>
                </section>

                <section className="grid-section" data-index="02">
                    <h3>EXPERIENCE</h3>
                    <ul className="brutalist-list">
                        <li>
                            <span className="place">DC STUDIOS</span>
                            <span className="detail">JULY - SEPT 2025</span>
                        </li>
                        <li>
                            <span className="place">HONEST DESIGNS</span>
                            <span className="detail">APR 2025</span>
                        </li>
                        <li>
                            <span className="place">GOOGLE DEVELOPER CLUB</span>
                            <span className="detail">2024 - 2025</span>
                        </li>
                        <li>
                            <span className="place">NON PROFIT ORGANIZATIONS</span>
                            <span className="detail">2021 - 2022</span>
                        </li>
                    </ul>

                    <div style={{ marginTop: '50px' }}>
                        <h3>SKILLS</h3>
                        <div className="skills-container">
                            <div className="skill-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png" alt="Photoshop" className="skill-logo" />
                                <span>PHOTOSHOP</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="skill-logo" />
                                <span>FIGMA</span>
                            </div>
                            <div className="skill-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" alt="Blender" className="skill-logo" />
                                <span>BLENDER</span>
                            </div>
                            <div className="skill-item">
                                <img src="/assets/canva-icon.png" alt="Canva" className="skill-logo" />
                                <span>CANVA</span>
                            </div>
                            <div className="skill-item">
                                <img src="/assets/affinity.svg" alt="Affinity" className="skill-logo" />
                                <span>AFFINITY</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/*
            <section id="contact" className="contact-section">
                <h2>CONTACT</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <span className="contact-label">EMAIL:</span>
                        <a href="mailto:vaishnavipawar860@gmail.com" className="contact-link">vaishnavipawar860@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <span className="contact-label">INSTAGRAM:</span>
                        <a href="https://www.instagram.com/viis_cameraroll/" target="_blank" className="contact-link">viis_cameraroll</a>
                    </div>
                    <div className="contact-item">
                        <span className="contact-label">LINKEDIN:</span>
                        <a href="https://www.linkedin.com/in/vaishnavi-pawar-24b636215/" target="_blank" className="contact-link">Vaishnavi Pawar</a>
                    </div>
                </div>
            </section>
            */}
        </div>
    );
};

export default ResumeSection;
