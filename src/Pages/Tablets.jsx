import React from "react"
import { Component } from "react";
import {Link} from "react-router-dom"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {TextField} from "@material-ui/core"
import MediaCard from "../Components/Cards";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";


class Tablets extends Component{
    render(){
        return(
            <div>
                <Header/>
            <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                <h3 style={{marginTop:"30px"}}>Tablets</h3>
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
                <Link to>Apple </Link> </li>
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
            <div className="col-8">
                <Link to="/Tablet1"><MediaCard image="https://apollo-singapore.akamaized.net/v1/files/tk8m8scrccq-PK/image;s=1080x1080"
                head="RS 18,500"
                content="Kyocera Qua Tab (Original Japan Stock) 3GB 32GB Android 8.0 Brand New" />
                </Link>
                <Link to="/Tablet2"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/0j9vb0oo93mn3-PK/image;s=1080x1080"
                head="RS 21,999"
                content="Lenovo Tablet E10 3gb 32gb PUBG SUPPORTED GAMING TABLET DELIVERY" />
                </Link>
                <Link to="/Tablet3"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/qida223l4wre-PK/image;s=1080x1080"
                head="RS 21,999"
                content="Asus Zenpad S 8.0 4GB 64GB IPS Display Gorilla Glass Brand New Tablets" />
                </Link>
                <Link to="/Tablet1"><MediaCard image="https://apollo-singapore.akamaized.net/v1/files/tk8m8scrccq-PK/image;s=1080x1080"
                head="RS 18,500"
                content="Kyocera Qua Tab (Original Japan Stock) 3GB 32GB Android 8.0 Brand New" />
                </Link>
                <Link to="/Tablet2"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/0j9vb0oo93mn3-PK/image;s=1080x1080"
                head="RS 21,999"
                content="Lenovo Tablet E10 3gb 32gb PUBG SUPPORTED GAMING TABLET DELIVERY" />
                </Link>
                <Link to="/Tablet3"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/qida223l4wre-PK/image;s=1080x1080"
                head="RS 21,999"
                content="Asus Zenpad S 8.0 4GB 64GB IPS Display Gorilla Glass Brand New Tablets" />
                </Link><Link to="/Tablet1"><MediaCard image="https://apollo-singapore.akamaized.net/v1/files/tk8m8scrccq-PK/image;s=1080x1080"
                head="RS 18,500"
                content="Kyocera Qua Tab (Original Japan Stock) 3GB 32GB Android 8.0 Brand New" />
                </Link>
                <Link to="/Tablet2"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/0j9vb0oo93mn3-PK/image;s=1080x1080"
                head="RS 21,999"
                content="Lenovo Tablet E10 3gb 32gb PUBG SUPPORTED GAMING TABLET DELIVERY" />
                </Link>
                <Link to="/Tablet3"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/qida223l4wre-PK/image;s=1080x1080"
                head="RS 21,999"
                content="Asus Zenpad S 8.0 4GB 64GB IPS Display Gorilla Glass Brand New Tablets" />
                </Link><Link to="/Tablet1"><MediaCard image="https://apollo-singapore.akamaized.net/v1/files/tk8m8scrccq-PK/image;s=1080x1080"
                head="RS 18,500"
                content="Kyocera Qua Tab (Original Japan Stock) 3GB 32GB Android 8.0 Brand New" />
                </Link>
                <Link to="/Tablet2"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/0j9vb0oo93mn3-PK/image;s=1080x1080"
                head="RS 21,999"
                content="Lenovo Tablet E10 3gb 32gb PUBG SUPPORTED GAMING TABLET DELIVERY" />
                </Link>
                <Link to="/Tablet3"> <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/qida223l4wre-PK/image;s=1080x1080"
                head="RS 21,999"
                content="Asus Zenpad S 8.0 4GB 64GB IPS Display Gorilla Glass Brand New Tablets" />
                </Link>

            </div>





            </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Tablets