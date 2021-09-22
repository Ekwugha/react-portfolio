import React from 'react';
import './title.styles.css';

const Title = ({ children }) => (
    <h1 data-aos='zoom-in-down' className="mb-1 text-uppercase title-text text-center">
        <div> { children } </div>
        <div className="underline"></div>
    </h1>
);


export default Title;