import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class Footer extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'Footer'}>
                        <div className="jumbotronGry2" >
                               <div className="container-fluid">
                                    <p className="text-muted">Testing Text</p>
                              </div>
                        </div>
            </ScrollableAnchor>
            );
      }
}
