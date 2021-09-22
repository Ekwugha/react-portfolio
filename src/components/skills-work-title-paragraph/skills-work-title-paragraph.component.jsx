import React from 'react';
import './skills-work-title-paragraph.styles.css';

const Paragraph = ({ children }) => (
    <p data-aos='fade-up' className="text-center title-p text-secondary mt-3"> { children } </p>
);


export default Paragraph;