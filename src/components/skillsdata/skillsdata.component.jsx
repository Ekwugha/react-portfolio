import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum, faJsSquare  } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import CardBody from '../card/card.component';

export class SkillsData extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sections: [
                {
                    id: 1,
                    icon: <FontAwesomeIcon icon={faEthereum} className="fa-2x my-4 pb-2"/>,
                    title: 'Ethereum',
                    body: "I develop smart contract in the Ethereum blockchain using solidity. I create dApps like deFi apps, NFTs, ERC20 Tokens e.t.c.",
                    footer1: "Solidity",
                    footer2: "EtherJS",
                    footer3: "Hardhat", 
                    footer4: "Web3",
                    footer5: "Ganache",
                    footer6: "Alchemy",
                },
                {
                  id: 2,
                  icon: <FontAwesomeIcon icon={faJsSquare} className="fa-2x my-4 pb-2"/>,
                  title: 'JavaScript',
                  body: "It's my main language and I know it well. I focus on building single-page apps(SPA) with the attention to code quality and best practices.",
                  footer1: "React",
                  footer2: "Next",
                  footer3: "Jquery",                
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
                    footer4: "Vercel",
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