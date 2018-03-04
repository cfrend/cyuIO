import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class Footer extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'Footer'}>
                        <div className="jumbotronGry2" >
                              <div className="row">
                                     <div className="col-md-4">
                                       <div className="text-right text-cyutilWhite">
                                             <h3>Contact</h3>
                                                   {/*<i>General Questions</i>
                                                   <br/>
                                                   <a href="mailto:info@cyutil.io">info@cyutil.io</a>*/}
                                                   <br/>
                                                   <br/>
                                                   <i>Founder Chauncey Frend</i>
                                                   <br/>
                                                   <a href="mailto:cfrend@cyutil.io">cfrend@cyutil.io</a>
                                       </div>
                                    </div>
                                    <div className="col-md-4">
                                          <div className="text-center text-cyutilWhite">
                                                <br/>
                                                <br/>
                                                <br/>
                                                <img width="160" height="23" src="/images/footerSymGry.png"></img>
                                          </div>
                                    </div>
                                    <div className="col-md-4">
                                          <div className="text-left text-cyutilWhite">
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                Copyright © 2018 CYUTIL llc. All rights reserved.
                                          </div>
                                    </div>
                              </div>
                        </div>
            </ScrollableAnchor>
            );
      }
}
