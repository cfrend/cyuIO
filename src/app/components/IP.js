import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class IP extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'IP'}>
                    <div className="container-fluid">
                        <div className="jumbotronBlu3" >
                              <h1 className="text-muted">Testing Text</h1>
                        </div>
                  </div>
            </ScrollableAnchor>
            );
      }
}
