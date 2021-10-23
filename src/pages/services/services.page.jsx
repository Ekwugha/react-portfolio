import React from 'react';
import Header from '../../components/header/header.component';
import Services from '../../components/services/services.component';
import Footer from '../../components/footer/footer.component';

function ServicePage() {
    return (
        <div>
            <Header title="service"/>
            <Services />    
            <Footer />
        </div>
    )
}


export default ServicePage;