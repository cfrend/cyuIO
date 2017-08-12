import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class QA extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'QA'}>
                    <div className="container">
                        <div className="jumbotronBlu2" >
                              <div className="row">
                                     <div className="col-md-4">

                                    </div>
                                    <div className="col-md-4">
                                          <div className="text-center text-cyutilWhite">
                                                      <h1>Q&A</h1>
                                          </div>
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                              </div>
                              <div className="row">
                                     <div className="col-md-4">
                                           <div className="text-center text-cyutilWhite">
                                                <p><b>What VR systems is cy.PIPES™ compatible with?</b></p>
                                                <hr className="my-4" />
                                                Currently cy.PIPES™ supports the HTC Vive system.  Support for the Rift is progressing, but not ready quite yet.
                                          </div>
                                    </div>
                                    <div className="col-md-4">
                                          <div className="text-center text-cyutilWhite">
                                               <p><b>Can I control hydraulic or robotics with cy.PIPES™?</b></p>
                                               <hr className="my-4" />
                                               No, cy.PIPES™ is a control solution for ON and OFF high voltage control.  More complex items like hydraulic cylinders or robotic parts should be controlled by industrial controllers like programmable logic controllers (PLCs).  cy.PIPES™ has USB ports and bluetooth connectivity that will be utilized in future versions of the firmware to control more complex EFDs.
                                         </div>
                                    </div>
                                    <div className="col-md-4">
                                          <div className="text-center text-cyutilWhite">
                                               <p><b>How can I create a smell emitter using cy.PIPES™?</b></p>
                                               <hr className="my-4" />
                                                To do this you will have to create a custom effect feedback device (EFD) to do this.  If you are interested in building custom EFDs like smell emitters with cy.PIPES™ take a look at our YouTube page.  We will post examples of custom EFDs built by developers using cy.PIPES™ to acheive effects like shake, smell, or even rain effects.
                                         </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </ScrollableAnchor>
            );
      }
}
