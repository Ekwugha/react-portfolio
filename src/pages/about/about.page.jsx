import React from 'react';
import Header from '../../components/header/header.component';
import About from '../../components/about/about.component';
import Footer from '../../components/footer/footer.component';

function AboutPage() {
    return (
        <div>
            <Header title="about"/>
            <About />
            <Footer />
        </div>
    )
}


export default AboutPage;