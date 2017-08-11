import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class QA extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'QA'}>
                    <div className="container-fluid">
                        <div className="jumbotronBlu3" >
                              <h1>Testing Text</h1>
                              <hr className="my-4" />
                        </div>
                  </div>
            </ScrollableAnchor>
            );
      }
}
