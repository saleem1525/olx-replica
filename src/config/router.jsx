import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from "../Pages/Home"
import MobilePhone from "../Pages/MobilePhone";
import Sell from "../Pages/Sell";
import SellForm from "../Pages/SellForm";
import Cars from "../Pages/Cars";
import Houses from "../Pages/Houses";
import LandsandPlots from "../Pages/LandsandPlots";
import Motorcycles from "../Pages/Motorcycles";
import TVAudioVideo from "../Pages/TVAudioVideo";
import Tablets from "../Pages/Tablets";
import Mobile1 from "../MobilePhones/Mobile1";
import Mobile2 from "../MobilePhones/Mobile2";
import Mobile3 from "../MobilePhones/Mobile3";
import House1 from "../Houses/House1";
import House2 from "../Houses/House2";
import House3 from "../Houses/House3";
import Car1 from "../Cars/Car1";
import Car2 from "../Cars/Car2";
import Car3 from "../Cars/Car3";
import Land1 from "../LandPlots/Land1";
import Land2 from "../LandPlots/Land2";
import Land3 from "../LandPlots/Land3";
import Cycle1 from "../MotorCycles/Cycle1"
import Cycle2 from "../MotorCycles/Cycle2"
import Cycle3 from "../MotorCycles/Cycle3"
import Tablet1 from "../Tablets/Tablet1"
import Tablet2 from "../Tablets/Tablet2"
import Tablet3 from "../Tablets/Tablet3"
import Tv1 from "../TV-Video-Audio/1"
import Tv2 from "../TV-Video-Audio/2"
import Tv3 from "../TV-Video-Audio/3"















  class AppRouter extends Component{
      render() {
          return (
            <Router>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/MobilePhone" component={MobilePhone}/>
                  <Route exact path="/Sell" component={Sell}/>
                  <Route exact path="/Cars" component={Cars}/>
                  <Route exact path="/Houses" component={Houses}/>
                  <Route exact path="/LandsandPlots" component={LandsandPlots}/>
                  <Route exact path="/Motorcycles" component={Motorcycles}/>
                  <Route exact path="/TVAudioVideo" component={TVAudioVideo}/>
                  <Route exact path="/Tablets" component={Tablets}/>
                  <Route exact path="/Mobile1" component={Mobile1}/>
                  <Route exact path="/Mobile2" component={Mobile2}/>
                  <Route exact path="/Mobile3" component={Mobile3}/>
                  <Route exact path="/House1" component={House1}/>
                  <Route exact path="/House2" component={House2}/>
                  <Route exact path="/House3" component={House3}/>
                  <Route exact path="/Car1" component={Car1}/>
                  <Route exact path="/Car2" component={Car2}/>
                  <Route exact path="/Car3" component={Car3}/>
                  <Route exact path="/Land1" component={Land1}/>
                  <Route exact path="/Land2" component={Land2}/>
                  <Route exact path="/Land3" component={Land3}/>
                  <Route exact path="/Cycle1" component={Cycle1}/>
                  <Route exact path="/Cycle2" component={Cycle2}/>
                  <Route exact path="/Cycle3" component={Cycle3}/>
                  <Route exact path="/Tablet1" component={Tablet1}/>
                  <Route exact path="/Tablet2" component={Tablet2}/>
                  <Route exact path="/Tablet3" component={Tablet3}/>
                  <Route exact path="/Tv1" component={Tv1}/>
                  <Route exact path="/Tv2" component={Tv2}/>
                  <Route exact path="/Tv3" component={Tv3}/>
                  <Route exact path="/SellForm" component={SellForm}/>
















                  


              
              </Switch>
              </Router>
          )
      }
  }

  export default AppRouter;