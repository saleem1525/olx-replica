import React from "react"
import { Component } from "react";
import {Link} from "react-router-dom"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {TextField} from "@material-ui/core"
import MediaCard from "../Components/Cards";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";


class Houses extends Component{
    render(){
        return(
            <div>
                <Header/>
            <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                <h3 style={{marginTop:"30px"}}>Houses</h3>
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
                <h5 className="col-10" style={{marginTop:"20px"}} >AREA</h5> 
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
                <h5 className="col-10" style={{marginTop:"20px"}} >BATHROOMS</h5> 
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
            <div className="col-8">
                <Link to="/House1"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/pw5nj9ac7a0i2-PK/image;s=1080x1080"
                head="RS 150,000,000"
                content="Ideal Location Syed Brothers offers 2 Kanal Owner Build Spanish Design"  />
                </Link>
                <Link to="/House2"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/zftpwr6lm83l1-PK/image;s=1080x1080"
                head="RS 25,000,000"
                content="Spacious House 12 Marla Overseas Greens Sector3 Bahria Town Rawalpindi"  />
                </Link>
                <Link to="/House3"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/wwuj85diqoj93-PK/image;s=1080x1080"
                head="RS 36,000,000"
                content="House Is Available For Sale In Wapda Town Phase 1 - Block F1 Lahore"  />
                </Link>
                <Link to="/House1"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/pw5nj9ac7a0i2-PK/image;s=1080x1080"
                head="RS 150,000,000"
                content="Ideal Location Syed Brothers offers 2 Kanal Owner Build Spanish Design"  />
                </Link>
                <Link to="/House2"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/zftpwr6lm83l1-PK/image;s=1080x1080"
                head="RS 25,000,000"
                content="Spacious House 12 Marla Overseas Greens Sector3 Bahria Town Rawalpindi"  />
                </Link>
                <Link to="/House3"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/wwuj85diqoj93-PK/image;s=1080x1080"
                head="RS 36,000,000"
                content="House Is Available For Sale In Wapda Town Phase 1 - Block F1 Lahore"  />
                </Link>
                <Link to="/House1"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/pw5nj9ac7a0i2-PK/image;s=1080x1080"
                head="RS 150,000,000"
                content="Ideal Location Syed Brothers offers 2 Kanal Owner Build Spanish Design"  />
                </Link>
                <Link to="/House2"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/zftpwr6lm83l1-PK/image;s=1080x1080"
                head="RS 25,000,000"
                content="Spacious House 12 Marla Overseas Greens Sector3 Bahria Town Rawalpindi"  />
                </Link>
                <Link to="/House3"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/wwuj85diqoj93-PK/image;s=1080x1080"
                head="RS 36,000,000"
                content="House Is Available For Sale In Wapda Town Phase 1 - Block F1 Lahore"  />
                </Link>
                <Link to="/House1"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/pw5nj9ac7a0i2-PK/image;s=1080x1080"
                head="RS 150,000,000"
                content="Ideal Location Syed Brothers offers 2 Kanal Owner Build Spanish Design"  />
                </Link>
                <Link to="/House2"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/zftpwr6lm83l1-PK/image;s=1080x1080"
                head="RS 25,000,000"
                content="Spacious House 12 Marla Overseas Greens Sector3 Bahria Town Rawalpindi"  />
                </Link>
                <Link to="/House3"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/wwuj85diqoj93-PK/image;s=1080x1080"
                head="RS 36,000,000"
                content="House Is Available For Sale In Wapda Town Phase 1 - Block F1 Lahore"  />
                </Link>



            </div>





            </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Houses