import React from 'react';
import Header from '../../components/header/header.component';
import Work from '../../components/work/work.component';
import Footer from '../../components/footer/footer.component';

function WorkPage() {
    return (
        <div>
            <Header title="work"/>
            <Work />    
            <Footer />
        </div>
    )
}

export default WorkPage;