import React from "react";
import { Component } from "react";
import MediaCard from "../Components/Cards";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import {Link} from "react-router-dom"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {TextField} from "@material-ui/core"

class MobilePhones extends Component{
    render(){
        return(
            <div>
                <Header/>
         <div className="container-fluid" >  
         <div className="row">
         <div className="col-3">
                <h3 style={{marginTop:"30px"}}>Mobile Phones</h3>
                <h5 style={{marginTop:"20px"}}>Filters</h5>
                <p>______________________________________</p>
                <div className="row">
                <h5 className="col-10" style={{marginTop:"20px"}} >CATEGORIES</h5> 
                <button style={{border:"none"}} className="col-2"><ExpandMoreIcon/></button>
                </div>
                <li style={{listStyleType:"none"}}>
            <Link to  style={{paddingLeft:"0px"}}>All Categories </Link>
            <ul style={{paddingTop:"12px"}}>
            <Link to>Mobiles </Link> 
            <ul style={{paddingTop:"12px"}}>
            <Link to>Tablets </Link> 
            </ul>
            <ul style={{paddingTop:"12px"}}>
            <Link to>Accesories </Link> 
            </ul>
            <ul style={{paddingTop:"12px"}}>
            <Link to>Mobile Phones </Link> 
            </ul>
            </ul>
            </li>
            <p>______________________________________</p>
                <div className="row">
                <h5 className="col-10" style={{marginTop:"20px"}} >LOCATIONS</h5> 
                <button style={{border:"none"}} className="col-2"><ExpandMoreIcon/></button>
                </div>
            <li  style={{listStyleType:"none"}}>
            <Link to>Pakistan </Link> 
            <ul style={{paddingTop:"12px"}}>
            <Link to>Punjab </Link> <br/>
            <ul style={{paddingTop:"12px"}}>
            <Link to>Lahore </Link> 
            </ul>
            <ul style={{paddingTop:"12px"}}>
            <Link to>Rawalpindi </Link> 
            </ul>
            <ul style={{paddingTop:"12px"}}>
            <Link to>Faislabad </Link> 
            </ul>
            <ul style={{paddingTop:"12px"}}>
            <Link to>Multan </Link> 
            </ul>
            <ul style={{paddingTop:"12px"}}>
            <Link to>Gujranwala </Link> 
            </ul>
            </ul>
            </li>
            <p>______________________________________</p>
                <div className="row">
                <h5 className="col-10" style={{marginTop:"20px"}} >MAKE AND MODEL</h5> 
                <button style={{border:"none"}} className="col-2"><ExpandMoreIcon/></button>
                </div>
                <li  style={{listStyleType:"none",paddingTop:"12px"}}>
                <Link to>Samsung </Link> </li>
                <li  style={{listStyleType:"none",paddingTop:"12px"}}>
                <Link to>huawei </Link> </li>
                <li  style={{listStyleType:"none",paddingTop:"12px"}}>
                <Link to>Oppo </Link> </li>
                <li  style={{listStyleType:"none",paddingTop:"12px"}}>
                <Link to>Vivo </Link> </li>
                <li  style={{listStyleType:"none",paddingTop:"12px"}}>
                <Link to>Nokia </Link> </li>
                <p>______________________________________</p>
                <div className="row">
                <h5 className="col-10" style={{marginTop:"20px"}} >PRICE</h5> 
                <button style={{border:"none"}} className="col-2"><ExpandMoreIcon/></button>
                <form style={{marginTop:"10px",marginLeft:"10px"}} noValidate autoComplete="off">
                    <div className="row">
                        <div className="col-4">
                    <TextField id="filled-basic" label="Min" variant="filled" />
                    </div>
                    <div className="col-4">
                    <TextField id="filled-basic" label="Max" variant="filled" />
                    </div>
                    <div>
                    <button style={{border:"none"}} className="col-2" ><ArrowForwardIosIcon style={{paddingRight:"15px"}}/></button>
                    </div>
                    </div>
                </form>
                </div>
                <p>______________________________________</p>
                <div className="row">
                <h5 className="col-10" style={{marginTop:"20px"}} >YEAR</h5> 
                <button style={{border:"none"}} className="col-2"><ExpandMoreIcon/></button>
                <form style={{marginTop:"10px",marginLeft:"10px"}} noValidate autoComplete="off">
                    <div className="row">
                        <div className="col-4">
                    <TextField id="filled-basic" label="Min" variant="filled" />
                    </div>
                    <div className="col-4">
                    <TextField id="filled-basic" label="Max" variant="filled" />
                    </div>
                    <div>
                    <button style={{border:"none"}} className="col-2" ><ArrowForwardIosIcon style={{paddingRight:"15px"}}/></button>
                    </div>
                    </div>
                </form>
                </div>
                <p>______________________________________</p>
                <div >
                <h5 className="col-10" style={{marginTop:"20px"}} >CONDITION</h5> 
                <div style={{marginTop:"30px"}}>
                    <input type="checkbox" style={{transform:"scale(2)",marginRight:"20px",marginLeft:"20px"}}/>Used
                </div>
                <div style={{marginTop:"10px"}}>
                    <input type="checkbox" style={{transform:"scale(2)",marginRight:"20px",marginLeft:"20px"}}/>New
                </div>
                </div>

            </div>
            <div className="col-9">
            <Link to="/Mobile1">
            <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/oe34i8hhqusq3-PK/image;s=280x0;q=60 320w" 
                head="Rs 38,000" 
                content="Infinix Zero 8 (8GB 128GB) Box Pack 64MP Back 44MP Front Fast Charging" /></Link>
                <Link to="/Mobile2">
                <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/lzhtf5uk4enu2-PK/image;s=280x0;q=60 320w" 
                  head="Rs 25,000" 
                content="Lg g7 g8 (v40 128gb) v50 all lg model aveilable price info description"/>
                </Link>
                <Link to="/Mobile3">
                <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/5ckaytj3blmo1-PK/image;s=280x0;q=60 320w"  
                 head="Rs 30,000" 
                content="Samsung galaxy A30 10/10 condition price may kami hojay gi"/>
                </Link>
                <Link to="/Mobile1">
            <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/oe34i8hhqusq3-PK/image;s=280x0;q=60 320w" 
                head="Rs 38,000" 
                content="Infinix Zero 8 (8GB 128GB) Box Pack 64MP Back 44MP Front Fast Charging" /></Link>
                <Link to="/Mobile2">
                <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/lzhtf5uk4enu2-PK/image;s=280x0;q=60 320w" 
                  head="Rs 25,000" 
                content="Lg g7 g8 (v40 128gb) v50 all lg model aveilable price info description"/>
                </Link>
                <Link to="/Mobile3">
                <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/5ckaytj3blmo1-PK/image;s=280x0;q=60 320w"  
                 head="Rs 30,000" 
                content="Samsung galaxy A30 10/10 condition price may kami hojay gi"/>
                </Link>
                <Link to="/Mobile1">
            <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/oe34i8hhqusq3-PK/image;s=280x0;q=60 320w" 
                head="Rs 38,000" 
                content="Infinix Zero 8 (8GB 128GB) Box Pack 64MP Back 44MP Front Fast Charging" /></Link>
                <Link to="/Mobile2">
                <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/lzhtf5uk4enu2-PK/image;s=280x0;q=60 320w" 
                  head="Rs 25,000" 
                content="Lg g7 g8 (v40 128gb) v50 all lg model aveilable price info description"/>
                </Link>
                <Link to="/Mobile3">
                <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/5ckaytj3blmo1-PK/image;s=280x0;q=60 320w"  
                 head="Rs 30,000" 
                content="Samsung galaxy A30 10/10 condition price may kami hojay gi"/>
                </Link>
                <Link to="/Mobile1">
            <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/oe34i8hhqusq3-PK/image;s=280x0;q=60 320w" 
                head="Rs 38,000" 
                content="Infinix Zero 8 (8GB 128GB) Box Pack 64MP Back 44MP Front Fast Charging" /></Link>
                <Link to="/Mobile2">
                <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/lzhtf5uk4enu2-PK/image;s=280x0;q=60 320w" 
                  head="Rs 25,000" 
                content="Lg g7 g8 (v40 128gb) v50 all lg model aveilable price info description"/>
                </Link>
                <Link to="/Mobile3">
                <MediaCard image="https://apollo-singapore.akamaized.net:443/v1/files/5ckaytj3blmo1-PK/image;s=280x0;q=60 320w"  
                 head="Rs 30,000" 
                content="Samsung galaxy A30 10/10 condition price may kami hojay gi"/>
                </Link>
            
            
             
         
         </div>
         
         </div>
         </div>
         <Footer/>
            </div>
        )
    }
}

export default MobilePhones;