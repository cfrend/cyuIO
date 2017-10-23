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
                                                            <p>cy.PIPES™ Early Adopter units will be available for pre-order on Indigogo before the end of the month. These test units will only be sold in the US for now.</p>
                                                            <h1><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></h1>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-md-4">
                                                      <div className="embed-responsive embed-responsive-16by9">
                                                            <iframe width="360" height="203" src="https://youtu.be/OpDxGwWjQIg" allowFullScreen></iframe>
                                                      </div>
                                                <div className="text-center text-cyutilWhite">
                                                      <p>To be notified on the availability please sign up for updates on this <a href="https://www.indiegogo.com/projects/cy-pipes-early-adopter-offering/coming_soon">IndiGoGo</a> pre-launch page.</p>
                                                </div>
                                          </div>
                                          <div className="col-md-4">
                                                <div className="text-cyutilWhite text-left">
                                                            <p>Details and announcements will also be posted on <a href="https://www.facebook.com/Cyutil/">Facebook</a>.</p>
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
