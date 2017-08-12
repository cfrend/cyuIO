import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class Product extends React.Component {
      render(){
            let activeVid = 0;
            let vidURL = [
                  "https://www.youtube.com/embed/K0YWSkClm2I",
                  "https://www.youtube.com/embed/77CM_XwB65A"
            ];
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
                                    <h3 className="text-cyutilWhite" >PRODUCT</h3>
                                    <div className="jumbotronGry2">
                                          <div className="row">
                                                <div className="col-md-8">
                                                      <div className="embed-responsive embed-responsive-16by9">
                                                            <iframe width="610" height="343" src={vidURL[activeVid]}></iframe>
                                                      </div>
                                                      <br/>
                                                      <br/>
                                                </div>{/*Main Vid*/}
                                                      <div className="col-sm-4">
                                                            <a href="#Order">
                                                                  <img width="190" height="107" src="/images/vidThumbnail1.jpg"></img>
                                                                        <br/>
                                                                        <br/>
                                                            </a>
                                                    </div>
                                                    <div className="col-sm-4">
                                                          <a href="#">
                                                                  <img width="190" height="107" src="/images/vidThumbnail2.jpg"></img>
                                                                      <br/>
                                                                      <br/>
                                                          </a>
                                                    </div>
                                                    <div className="col-sm-4">
                                                            <a href="#">
                                                                  <img width="190" height="107" src="/images/vidThumbnail3.jpg"></img>
                                                                        <br/>
                                                                        <br/>
                                                          </a>
                                                    </div>
                                                <br/>
                                                <br/>
                                                <br/>
                                    </div>{/*Small vids*/}
                                    <div className="row">
                                          <div className="col-md-4">
                                                <div className="wellGry1">
                                                      <div className="text-cyutilWhite">
                                                            <p>cy.PIPES™ extends VR systems with high voltage control of common enviromental feedback devices (EFDs) like fans for wind effects, heat lamps for warmth effects, and solenoid valves for custom effects.</p>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-md-8">
                                                <div className="row">
                                                      <div className="col-md-6">
                                                            <div className="wellGry1">2</div>
                                                      </div>
                                                      <div className="col-md-6">
                                                             <div className="wellGry1">3</div>
                                                             <hr className="my-4" />
                                                      </div>
                                                </div>
                                                <div className="row">
                                                       <div className="col-md-6">
                                                             <div className="wellGry1">4</div>
                                                      </div>
                                                      <div className="col-md-6">
                                                             <div className="wellGry1">5</div>
                                                      </div>
                                                </div>
                                          </div>
                                          </div>
                                          <div className="row">
                                                 <div className="col-md-4">
                                                      <div className="wellGry1">6</div>
                                                </div>
                                                <div className="col-md-4">
                                                      <div className="wellGry1">7</div>
                                                </div>
                                                <div className="col-md-4">
                                                      <div className="wellGry1">8</div>
                                                </div>
                                          </div>
                                    </div>{/*Jumbotron*/}
                              </div>
                        </div>
            </ScrollableAnchor>
            );
      }
}
