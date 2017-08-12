import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';


export class Product extends React.Component {
      render(){
            function switchVid (num){
                  activeVid = num;
            }
            let activeVid = 0;
            let vidURL = [
                  /*videoOne: "https://www.youtube.com/embed/K0YWSkClm2I",
                  videoTwo: "https://www.youtube.com/embed/77CM_XwB65A",
                  videoThree: "https://www.youtube.com/embed/K0YWSkClm2I"*/
                  "https://www.youtube.com/embed/K0YWSkClm2I",
                  "https://www.youtube.com/embed/77CM_XwB65A",
                  "https://www.youtube.com/embed/K0YWSkClm2I"
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
                                                <div className="col-lg-4">
                                                      {/*<iframe width="560" height="315" src={vidURL[activeVid]}></iframe>*/}
                                                      <iframe width='560' height='315' src={vidURL[activeVid]}></iframe>
                                                </div>
                                                <div className="col-lg-4">
                                                      <br></br>
                                                </div>
                                                <div className="col-lg-4">
                                                            {/*<a href="#Order">
                                                                  <img width="160" height="90" src="/images/vidThumbnail1.jpg"></img>
                                                            </a>*/}
                                                            <button onClick={switchVid(1)} className="btn btn-default" >
                                                                  <img src="/images/vidThumbnail1.jpg" width="120" />
                                                            </button>
                                                            <a href="#">
                                                                  <img width="160" height="90" src="/images/vidThumbnail2.jpg"></img>
                                                            </a>
                                                            <a >
                                                                  <img width="160" height="90" src="/images/vidThumbnail3.jpg"></img>
                                                            </a>
                                                            <a href="#Order">
                                                                  <img width="160" height="90" src="/images/vidThumbnail4.jpg"></img>
                                                            </a>
                                                            <a href="#Order">
                                                                  <img width="160" height="90" src="/images/vidThumbnail5.jpg"></img>
                                                            </a>
                                                            <a href="#Order">
                                                                  <img width="160" height="90" src="/images/vidThumbnail6.jpg"></img>
                                                            </a>

                                                </div>
                                          </div>
                                     </div>
                              </div>
                        </div>
            </ScrollableAnchor>
            );
      }
}
