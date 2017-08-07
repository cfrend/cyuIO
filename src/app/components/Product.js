import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class Product extends React.Component {
      render(){
            return(
                  <ScrollableAnchor id={'Product'}>
                        {/*Carosel slide show system*/}
                        <div className="container-fluid">
                              <div className="container">
                                      <div id="myCarousel" className="carousel slide" data-ride="carousel">

                                        <ol className="carousel-indicators">
                                          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                          <li data-target="#myCarousel" data-slide-to="1"></li>
                                          <li data-target="#myCarousel" data-slide-to="2"></li>
                                          <li data-target="#myCarousel" data-slide-to="3"></li>
                                        </ol>

                                        <div className="carousel-inner" role="listbox">

                                          <div className="item active">
                                            <img src="/images/slide1.jpg" alt="Chania" width="1200" height="700" />
                                            <div className="carousel-caption">

                                              <img src="/images/IntroducingcyPIPES.png" />
                                              <p className="text-cyutilWhite">A control solution for VR developers.</p>
                                            </div>
                                          </div>

                                          <div className="item">
                                            <img src="/images/slide2.jpg" alt="Chania" width="1200" height="700" />
                                            <div className="carousel-caption">
                                            </div>
                                          </div>

                                          <div className="item">
                                            <img src="/images/slide3.jpg" alt="Flower" width="1200" height="700" />
                                            <div className="carousel-caption">
                                              <h3>A tool for 4D installations</h3>
                                              <p>Environmental feedback in VR systems extends presence to a new level of realism.</p>
                                            </div>
                                          </div>

                                          <div className="item">
                                            <img src="/images/slide4.jpg" alt="Flower" width="1200" height="700" />
                                            <div className="carousel-caption">
                                            </div>
                                          </div>
                                        </div>
                                        {/*<!-- Left and right controls -->*/}
                                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </div>
                                </div>
                               {/*YouTube selection*/}
                               <div className="container">
                                      <div className="jumbotronGry2">
                                          <div className="row">
                                                <div className="col-lg-4">
                                                      <iframe width="560" height="315" src="https://www.youtube.com/embed/K0YWSkClm2I"></iframe>
                                                </div>
                                                <div className="col-lg-4">
                                                      <br></br>
                                                </div>
                                                <div className="col-lg-4">

                                                            <iframe width="160" height="90" src="https://www.youtube.com/embed/K0YWSkClm2I"></iframe>
                                                            <iframe width="160" height="90" src="https://www.youtube.com/embed/K0YWSkClm2I"></iframe>
                                                            <iframe width="160" height="90" src="https://www.youtube.com/embed/K0YWSkClm2I"></iframe>
                                                            <iframe width="160" height="90" src="https://www.youtube.com/embed/K0YWSkClm2I"></iframe>
                                                            <iframe width="160" height="90" src="https://www.youtube.com/embed/K0YWSkClm2I"></iframe>
                                                            <iframe width="160" height="90" src="https://www.youtube.com/embed/K0YWSkClm2I"></iframe>
                                                </div>
                                          </div>
                                     </div>
                              </div>
                        </div>
            </ScrollableAnchor>
            );
      }
}
