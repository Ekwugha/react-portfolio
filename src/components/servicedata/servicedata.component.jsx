import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum  } from '@fortawesome/free-brands-svg-icons';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import CardBody from '../card/card.component';

export class ServiceData extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sections: [
                {
                    id: 1,
                    icon: <FontAwesomeIcon icon={faEthereum} className="fa-2x my-4 pb-2"/>,
                    title: 'Blockchain Development',
                    body: "I develop smart contract in the Ethereum blockchain using solidity programming language. I create dApps like deFi apps, NFTs, ERC20 Tokens, decentralized games e.t.c."
                },

                {
                  id: 2,
                  icon: <FontAwesomeIcon icon={faCode} className="fa-2x my-4 pb-2"/>,
                  title: 'Web Development',
                  body: "I provide professional web services to grow your business and also give you an online presence to reach a wide range of audience which you deserve."
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