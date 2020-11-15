import React, { Component } from "react";
import foot from "../images/footer.png";
import fb from "../images/Facebook.PNG";
import tw from "../images/Twitter.PNG";
import yt from "../images/icon_Image.PNG";
import ins from "../images/Instagram.PNG";
import appstore from "../images/AppStore_Image.PNG";
import play from "../images/GooglePlay_Image.PNG";



class Footer extends Component{
    render(){
        return(
            <div>
                <img style={{marginTop:"10%"}} src={foot} width="100%"/>
                <div style={{paddingTop:"20px",backgroundColor:"lightgrey"}} className="container-fluid">
                    <div className="row">
                        <div style={{marginRight:"3%"}} className="col-2">
                            <h6>POPULAR CATEGORIES</h6>
                            <ul style={{listStyleType:"none",padding:"0px"}}>
                                <li>Cars</li>
                                <li>Flats for Rent</li>
                                <li>Jobs</li>
                                <li>Mobile Phones</li>
                            </ul>
                        </div>
                        <div style={{marginRight:"3%"}} className="col-2">
                        <h6>TRENDING SEARCHES</h6>
                            <ul style={{listStyleType:"none",padding:"0px"}}>
                                <li>Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>
                            </ul>
                        </div>
                        <div style={{marginRight:"3%"}} className="col-2">
                        <h6>ABOUT US</h6>
                            <ul style={{listStyleType:"none",padding:"0px"}}>
                                <li>About OLX group</li>
                                <li>OLX blog</li>
                                <li>Contact us</li>
                                <li>OLX for business</li>
                            </ul>
                        </div>
                        <div style={{marginRight:"3%"}} className="col-2">
                        <h6>OLX</h6>
                            <ul style={{listStyleType:"none",padding:"0px"}}>
                                <li>Help</li>
                                <li>Sitemap</li>
                                <li>Legal and Privacy informations</li>
                                <li></li>
                            </ul>
                        </div>
                        <div style={{marginRight:"3%"}} className="col-2">
                        <h6>FOLLOW US</h6>
                        <ul style={{listStyleType:"none",padding:"0px",display:"inline-flex"}}>
                            <li style={{marginRight:"10%"}}><img src={fb}/> </li>
                            <li style={{marginRight:"10%"}}><img src={tw}/></li>
                            <li style={{marginRight:"10%"}}><img src={yt}/></li>
                            <li style={{marginRight:"10%"}}><img src={ins}/></li>
                        </ul>
                        <ul style={{listStyleType:"none",padding:"0px",display:"inline-flex"}}>
                            <li style={{marginRight:"10%"}}><img src={appstore}/> </li>
                            <li style={{marginRight:"10%"}}><img src={play}/></li>
                        </ul>

                        </div>

                    </div>


                </div>

                <div style={{backgroundColor:"darkslategrey",color:"white",display:"inline-flex", width:"100%"}}>
                    <p><b> Other Countries </b> India-South Africa-Indonesia</p>
                    <p><b> Free Classifieds in Pakistan. </b> © 2006-2020 OLX</p>
                </div>
            </div>
        )
    }
}

export default Footer