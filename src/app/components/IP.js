import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class IP extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'IP'}>
                        <div className="container">
                           <div className="jumbotronBlu3" >
                                 <div className="row">
                                        <div className="col-md-4">

                                       </div>
                                       <div className="col-md-4">
                                             <div className="text-center text-cyutilWhite">
                                                         <h3><b>Intellectual Property</b></h3>
                                             </div>
                                       </div>
                                       <div className="col-md-4">
                                       </div>
                                 </div>
                                 <div className="row">
                                        <div className="col-md-4">
                                          <div className="text-center text-cyutilWhite">
                                              <h1><span className="glyphicon glyphicon-modal-window" aria-hidden="true"></span></h1>
                                              <h2>Patents</h2>
                                              <hr className="my-4" />
                                              We have patented our technology in the United States.<br/>U.S. Patent PCT/US2017/018095
                                          </div>
                                       </div>
                                       <div className="col-md-4">
                                             <div className="text-center text-cyutilWhite">
                                                 <h1><span className="glyphicon glyphicon-oil" aria-hidden="true"></span></h1>
                                                 <h2>Firmware</h2>
                                                 <hr className="my-4" />
                                                 The firmware in cy.PIPES™ is closed source and owned and maintained by CYUTIL llc.
                                             </div>
                                       </div>
                                       <div className="col-md-4">
                                             <div className="text-center text-cyutilWhite">
                                                 <h1><span className="glyphicon glyphicon-education" aria-hidden="true"></span></h1>
                                                 <h3>Academic Publication</h3>
                                                 <hr className="my-4" />
                                                 We have published a peer-reviewed research <a href="http://proceedings.spiedigitallibrary.org/proceeding.aspx?articleid=2209432">paper about the development of cy.PIPES™</a> in the SPIE Electronic Imaging publication track "Engineering Reality of VR 2015." cy.PIPES™ won <a href="https://youtu.be/c389W_IDSrg">"the best research demo"</a> award at <a href="http://ieeevr.org/2016/program/research-demos/">IEEE VR 2016.</a>
                                             </div>
                                       </div>
                                 </div>
                           </div>
                     </div>
            </ScrollableAnchor>
            );
      }
}
