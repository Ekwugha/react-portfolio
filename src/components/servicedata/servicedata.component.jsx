import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMobileAlt, faChartBar, faGem } from "@fortawesome/free-solid-svg-icons";
import CardBody from '../card/card.component';

export class ServiceData extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sections: [
                {
                  id: 1,
                  icon: <FontAwesomeIcon icon={faCode} className="fa-2x my-4 pb-2"/>,
                  title: 'Web Development',
                  body: "I provide professional web services to grow your business and also give you an online presence to reach a wide range of audience which you deserve."
                },
                {
                    id: 2,
                    icon: <FontAwesomeIcon icon={faMobileAlt} className="fa-2x my-4 pb-2"/>,
                    title: 'Responsive Design',
                    body: "I love creating responsive website of high quality. I approach all project with a mobile first view, ensuring that what I produce will look great regardless of the devices it's on."
                },
                {
                    id: 3,
                    icon: <FontAwesomeIcon icon={faChartBar} className="fa-2x my-4 pb-2"/>,
                    title: 'Marketing Services',
                    body: "I have good knowledge in search engine optimization, social media and digital marketing strategies. I can help you get exposure and high traffic for your sites."
                },
                {
                    id: 4,
                    icon: <FontAwesomeIcon icon={faGem} className="fa-2x my-4 pb-2"/>,
                    title: 'Branding',
                    body: "I give companies and individuals the appearance they need cause no matter if online store or instagram page, if you sell products you'll need a professional apperance and identity."
                }
            ]
              
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.sections.map (({ id, title, body, icon }) => (
                    <CardBody key={id} title={ title } body={ body } icon={icon} />
                ))} 
            </React.Fragment>
        )
    }
    

}
export default ServiceData;