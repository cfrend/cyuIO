import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class Order extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'Order'}>
                    <div className="container-fluid">
                        <div className="jumbotronGry1" >
                              <h1>Testing Text</h1>
                        </div>
                  </div>
            </ScrollableAnchor>
            );
      }
}
