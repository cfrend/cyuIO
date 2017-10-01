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
                                    <div className="row">
                                           <div className="col-md-4">
                                                <div className="text-cyutilWhite">
                                                      <div className="text-right">
                                                            <p>cy.PIPES™ beta test units will be available starting in mid-October 2017 on Indigogo. Beta test units will only be sold in the US for now.</p>
                                                            <h1><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></h1>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-md-4">
                                                      <div className="embed-responsive embed-responsive-16by9">
                                                            <iframe width="360" height="203" src="https://www.youtube.com/embed/v7Bv2loQWmw" allowFullScreen></iframe>
                                                      </div>
                                                <div className="text-center text-cyutilWhite">
                                                      <p>A message from Chauncey about availability will be posted here from time to time.</p>
                                                </div>
                                          </div>
                                          <div className="col-md-4">
                                                <div className="text-cyutilWhite text-left">
                                                            <p>Details and announcements will be posted here and on <a href="https://www.facebook.com/Cyutil/">facebook</a> when ready.</p>
                                                            <h1><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></h1>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </ScrollableAnchor>
            );
      }
}
