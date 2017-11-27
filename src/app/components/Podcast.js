import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class Podcast extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'Podcast'}>
                    <div className="container">
                        <div className="jumbotronBlu" >
                              <div className="row">
                                     <div className="col-md-4">

                                    </div>
                                    <div className="col-md-4">
                                          <div className="text-center text-cyutilWhite">
                                                      {/*<!-<h1>The CYUTIL Podcast: Episode 1</h1>-->*/}
                                          </div>
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                              </div>
                              <div className="row">
                                     <div className="col-md-4">
                                           <div className="text-center text-cyutilWhite">
                                                <p></p>
                                                <hr className="my-4" />
                                          </div>
                                    </div>
                                    <div className="col-md-4">
                                          <div className="text-center text-cyutilWhite">
                                               <p></p>

                                         <hr className="my-4" />
                                         </div>
                                    </div>
                                    <div className="col-md-4">
                                          <div className="text-center text-cyutilWhite">
                                               <p></p>
                                               <hr className="my-4" />
                                         </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </ScrollableAnchor>
            );
      }
}
