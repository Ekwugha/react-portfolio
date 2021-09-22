import React from 'react';
import './icon.styles.css';

const Icon = ({ children }) => (
    <div className="icon">
        <div className="icon-circle"> { children } </div>
    </div>
);


export default Icon;