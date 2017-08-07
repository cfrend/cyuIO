import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class Order extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'Order'}>
                    <div className="container-fluid">
                        <div className="container">
                              <h3 className="text-cyutilWhite" >ORDER</h3>
                              <div className="jumbotronGry1" >
                                    <h2 className="text-cyutilGry2">cy.PIPES Beta Test Units Available in September 2017 on Indigogo</h2>
                                    <div className="text-cyutilWhite">Details will be posted here when ready.</div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8A-lMM75KNs"></iframe>
                                    <div className="text-cyutilBlack">A message from Chauncey about the beta test program.</div>
                              </div>
                        </div>
                  </div>
            </ScrollableAnchor>
            );
      }
}
