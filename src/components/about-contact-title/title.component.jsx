import React from 'react';
import './title.styles.css';

const Title = ({ children }) => (
    <div>
        <p class="mb-0 about-title ">
            <strong>{ children }</strong>
        </p>
        <div class="title-underline"></div>
    </div>
);


export default Title;