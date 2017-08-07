import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: -60, scrollDuration: 700});

export class Header extends React.Component {
      render(){
            return(
                        <nav className="navbar navbar-default">
                          <div className="container-fluid">
                           {/* Brand and toggle get grouped for better mobile display */}
                            <div className="navbar-header">
                              <button className="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" href="#">
                                    <img alt="Brand" height="30" src="../images/cyBrand80x40.png"/>
                              </a>
                            </div>

                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                              <ul className="nav navbar-nav">
                              {/*example of active state just in case I want to express this*/}
                              {/*<li className="active"><a href="#">Product <span className="sr-only">(current)</span></a></li>*/}
                                <li><a href='#Product'>Product</a></li>
                                <li><a href="#Order">Order</a></li>
                                <li><a href="#QA">Q&A</a></li>
                                <li><a href="#IP">IP</a></li>
                                <li><a href="#">Developers</a></li>
                              </ul>
                              {/* right side navbar*/}
                              <ul className="nav navbar-nav navbar-right">
                                <li>
                                      <a href="https://www.facebook.com/Cyutil/">
                                            <img alt="Brand" height="27" src="../images/facebook40x40.png"/>
                                     </a>
                               </li>
                               <li>
                                     <a href="#">
                                           <img alt="Brand" height="30
                                                 " src="../images/youtube40x40.png"/>
                                    </a>
                              </li>
                              </ul>
                        </div>{/* /.navbar-collapse */}
                  </div>{/* /.container-fluid */}
            </nav>

            );
      }
}
