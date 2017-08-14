import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

export class Product extends React.Component {
      constructor(){
            super();
            this.state = {
                  videoURL:  [
                        "https://www.youtube.com/embed/K0YWSkClm2I",
                        "https://www.youtube.com/embed/77CM_XwB65A",
                        "https://www.youtube.com/embed/v7Bv2loQWmw"
                  ],
                  activeVideo: 0
            };
      }

      onActiveVideo(vidIndex){
            this.setState({
                  activeVideo: vidIndex
            });
      }

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
                                </div> {/*End of carosel slide show system*/}
                               {/*YouTube selection*/}
                               <div className="container">
                                    <h3 className="text-cyutilWhite" >PRODUCT</h3>
                                    <div className="jumbotronGry2">
                                          <div className="row">
                                                <div className="col-md-8">
                                                      <div className="embed-responsive embed-responsive-16by9">
                                                            {/*<iframe width="610" height="343" src={vidURL[activeVid]} allowFullScreen></iframe>*/}
                                                            <iframe width="610" height="343" src={this.state.videoURL[this.state.activeVideo]} allowFullScreen></iframe>
                                                      </div>
                                                      <br/>
                                                      <br/>
                                                </div>{/*Main Vid*/}
                                                      <div className="col-sm-4 text-center">
                                                            <a onClick={() => this.onActiveVideo(1)}>

                                                                  <img width="190" height="107" src="/images/vidThumbnail1.jpg"></img>
                                                                  <br/>
                                                                  <br/>
                                                            </a>
                                                    </div>
                                                    <div className="col-sm-4 text-center">
                                                          <a onClick={() => this.onActiveVideo(0)}>
                                                                  <img width="190" height="107" src="/images/vidThumbnail2.jpg"></img>
                                                                      <br/>
                                                                      <br/>
                                                          </a>
                                                    </div>
                                                    <div className="col-sm-4 text-center">
                                                            <a onClick={() => this.onActiveVideo(2)}>
                                                                  <img width="190" height="107" src="/images/vidThumbnail3.jpg"></img>
                                                                        <br/>
                                                                        <br/>
                                                          </a>
                                                    </div>
                                                <br/>
                                                <br/>
                                                <br/>
                                    </div>{/*End of YouTube selection*/}
                                    <div className="row">
                                          <div className="col-md-4">
                                                <div className="wellGry1">
                                                      <div className="text-cyutilWhite text-center">
                                                            <img width="235" height="76" src="/images/cyPIPES.png"></img>
                                                            extends immersive systems with high voltage control of common effect feedback devices (EFDs) like fans for wind, heat lamps for warmth, solenoid valves for fluid effects like scent/mist, and support for microcontroller driven custom EFDs.
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-md-8">
                                                <div className="row">
                                                      <div className="col-md-6">
                                                            <div className="container-fluid text-center">
                                                                  <img className="animated-gif" width="300" height="300" src="/images/sys3.gif"></img>
                                                                  <br/>
                                                                  <br/>
                                                            </div>
                                                      <hr className="my-4" />
                                                      </div>
                                                      <div className="col-md-6">
                                                             <div className="wellGry1 text-cyutilWhite text-center">
                                                                  <h2><i>Custom effects for many VR systems</i></h2>
                                                                  <p><i>(Vive Officially supported.<br/>Rift, HoloLens, and CAVE support coming soon.)</i></p>
                                                             </div>
                                                            <hr className="my-4" />

                                                      </div>
                                                </div>
                                                {/*<div className="row">
                                                       <div className="col-md-6">
                                                            <div className="wellGry1 text-cyutilWhite text-center">
                                                                  <h2><i>IoT style scalable platform</i><br/><br/></h2>
                                                            </div>
                                                      </div>
                                                      <div className="col-md-6">
                                                             <div className="text-center">
                                                                  <img width="300" height="150" src="/images/IoT2.gif"></img>
                                                             </div>
                                                             <hr className="my-4" />
                                                      </div>
                                                </div>*/}
                                          </div>
                                    </div>
                                          {/*<div className="row">
                                                 <div className="col-md-4">

                                                </div>
                                                <div className="col-md-4">
                                                      <div className="text-center">
                                                            <img width="250" height="250" src="/images/fx2.gif"></img>
                                                            <br/>
                                                            <br/>
                                                      </div>
                                                </div>
                                                <div className="col-md-4">
                                                      <div className="wellGry1 text-cyutilWhite text-center">
                                                            <h2><i>Control simple and/or custom effects to enable your creative ideas.</i></h2>
                                                      </div>
                                                      <hr className="my-4" />
                                                </div>
                                          </div>
                                          <div className="row">
                                                 <div className="col-md-4">
                                                </div>
                                                <div className="col-md-4">
                                                      <div className="wellGry1 text-cyutilWhite text-center">
                                                            <h2><i>Flexible and quick configuration system.</i></h2>
                                                      </div>
                                                </div>
                                                <div className="col-md-4">
                                                      <div className="text-center">
                                                            <img width="300" height="169" src="/images/config.gif"></img>
                                                      </div>
                                                      <hr className="my-4" />
                                                </div>
                                          </div>*/}
                                          <div className="row">
                                                 <div className="col-md-4 text-center">
                                                       <br/>
                                                       <h1><span className="glyphicon glyphicon-flash" aria-hidden="true"></span></h1>
                                                </div>
                                                <div className="col-md-4">
                                                      <div className="text-center">
                                                            <img  width="300" height="169" src="/images/authoring.gif"></img>
                                                            <br/>
                                                            <br/>
                                                      </div>
                                                </div>
                                                <div className="col-md-4">
                                                      <div className="wellGry1 text-cyutilWhite text-center">
                                                            <h2><i>Open-sourced automated effects authoring tools plugin package.</i></h2>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>{/*Jumbotron*/}
                              </div>
                        </div>
            </ScrollableAnchor>
            );
      }
}
