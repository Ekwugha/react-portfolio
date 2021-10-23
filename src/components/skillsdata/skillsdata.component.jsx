import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faCss3Alt  } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import CardBody from '../card/card.component';

export class SkillsData extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sections: [
                {
                  id: 1,
                  icon: <FontAwesomeIcon icon={faJsSquare} className="fa-2x my-4 pb-2"/>,
                  title: 'JavaScript',
                  body: "It's my main language and I know it well. I focus on building single-page apps(SPA) with the attention to code quality and best practices.",
                  footer1: "React",
                  footer2: "Jquery",                
                },
                {
                    id: 2,
                    icon: <FontAwesomeIcon icon={faCss3Alt} className="fa-2x my-4 pb-2"/>,
                    title: 'HTML/CSS',
                    body: "I write semantic markup with accessibility in mind. I keep my CSS manageable and scalable strictly following best convention practices.",
                    footer1: "Bootstrap",
                    footer2: "HTML5",
                    footer3: "SASS", 
                },
                {
                    id: 3,
                    icon: <FontAwesomeIcon icon={faDatabase} className="fa-2x my-4 pb-2"/>,
                    title: 'Backend/DB',
                    body: "I started off with PHP and MySQL but now I use more of NodeJS, Express and MongoDB because it's a JavaScript server side language.",
                    footer1: "NodeJS",
                    footer2: "Express",
                    footer3: "MongoDB",                    
                    footer4: "PHP",
                    footer5: "MySQL",
                    footer6: "Firebase",
                },
                {
                    id: 4,
                    icon: <FontAwesomeIcon icon={faCloudUploadAlt} className="fa-2x my-4 pb-2"/>,
                    title: 'Integrations',
                    body: "I use this to host as many project as I can for free either to show a client before buying a domian and hosting it or if the project is not yet in use.",
                    footer1: "Heroku",
                    footer2: "Netlify",
                    footer3: "Github",
                }
            ]
              
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.sections.map (({ id, title, body, icon, footer1, footer2, footer3, footer4, footer5, footer6  }) => (
                    <CardBody key={id} title={ title } body={ body } icon={icon} footer1={footer1} footer2={footer2} footer3={footer3} footer4={footer4} footer5={footer5} footer6={footer6} />
                ))} 
            </React.Fragment>
        )
    }
    

}
export default SkillsData;