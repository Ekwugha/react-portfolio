import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faCss3Alt, faArtstation,  } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import CardBody from '../card/card.component';

export class WorkData extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sections: [
                {
                  id: 1,
                  image: <a href="https://ekwugha.github.io/price-comparison-website/" data-toggle="lightbox" data-gallery="example-gallery">
                            <img src="assest/html1.png" href="https://ekwugha.github.io/price-comparison-website/" alt="Portfolio-Item" className="imgfluid card-img-top" />
                        </a>,
                  title: 'JavaScript',
                  body: "It's my main language and I know it well. I focus on building single-page apps(SPA) with the attention to code quality and best practices.",              
                },
                {
                    id: 2,
                    image: <FontAwesomeIcon icon={faCss3Alt} className="fa-2x my-4 pb-2"/>,
                    title: 'HTML/CSS',
                    body: "I write semantic markup with accessibility in mind. I keep my CSS manageable and scalable strictly following best convention practices.",
                    footer1: "Bootstrap", 
                },
                {
                    id: 3,
                    image: <FontAwesomeIcon icon={faDatabase} className="fa-2x my-4 pb-2"/>,
                    title: 'Backend/DB',
                    body: "I started off with PHP and MySQL but now i use more of Firebase because it reduces the complexity and makes me focus more on the front-end.",
                    footer1: "PHP",
                    footer2: "MySQL",
                    footer3: "Firebase",
                },
                {
                    id: 4,
                    image: <FontAwesomeIcon icon={faArtstation} className="fa-2x my-4 pb-2"/>,
                    title: 'Design',
                    body: "I use this to come up with a functional view of any app I tend to make before starting out with the code cause they use simple drag and drop features.",
                    footer1: "Bubble",
                }
            ]
              
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.sections.map (({ id, title, body, icon, footer1, footer2, footer3 }) => (
                    <CardBody key={id} title={ title } body={ body } icon={icon} footer1={footer1} footer2={footer2} footer3={footer3} />
                ))} 
            </React.Fragment>
        )
    }
    

}
export default WorkData;