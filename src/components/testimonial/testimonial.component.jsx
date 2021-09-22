import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './testimonial.styles.css';

function Testimonial() {
    return (
        <div>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={5000}
                className="py-5 overlay-mf"
                data-aos='fade-up'
            >
                <div data-aos='fade-up'>
                    <img src="assest/test2.jpg" alt="Uche Emodi" className="" style={{maxWidth: '30%'}}/>
                    <div className="myCarousel pb-2">
                        <h3>Uche Emodi</h3>
                        <h4>Front-end Developer</h4>
                        <p>Your ability of always being eager and determined to learn new things is what i really fancy about you. I am glad we crossed paths and i'm sure there are better days ahead for us both, cheers.</p>
                    </div>
                </div>

                <div data-aos='fade-up'>
                    <img src="assest/test1.jpg" alt="ifeanyi nwankwo" className="" style={{maxWidth: '30%'}}/>
                    <div className="myCarousel">
                        <h3>ifeanyi nwankwo</h3>
                        <h4>Software Developer</h4>
                        <p>I express my gratitude working with you, you have an innovative mindset and you were always ready to give out what you have/know for assistance.</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Testimonial;
