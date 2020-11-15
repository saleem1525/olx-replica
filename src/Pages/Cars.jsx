import React from "react"
import { Component } from "react";
import {Link} from "react-router-dom"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {TextField} from "@material-ui/core"
import MediaCard from "../Components/Cards";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";


class Cars extends Component{
    render(){
        return(
            <div>
                <Header/>
            <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                <h3 style={{marginTop:"30px"}}>Cars</h3>
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
                <Link to>Suzuki </Link> </li>
                <li  style={{listStyleType:"none",paddingTop:"12px"}}>
                <Link to>Toyota </Link> </li>
                <li  style={{listStyleType:"none",paddingTop:"12px"}}>
                <Link to>Honda </Link> </li>
                <li  style={{listStyleType:"none",paddingTop:"12px"}}>
                <Link to>Daihatsu </Link> </li>
                <li  style={{listStyleType:"none",paddingTop:"12px"}}>
                <Link to>Nissan </Link> </li>
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
                <Link to="/Car1"><MediaCard image="https://apollo-singapore.akamaized.net/v1/files/81bw06bxqetw-PK/image;s=1080x1080"  
                head="Rs 280000"
                content="Toyota Mark X 2.5 2006"/>
                </Link> 
                <Link to="/Car2">
                <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/xs2avff3e9iw1-PK/image;s=1080x1080"   
                head="RS 33,00000" 
                content="Toyota Prius 1.8 S 2010"/>
                </Link>
                <Link to="/Car3">
                <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/ossvaj8vy0vt-PK/image;s=1080x1080"   
                head="RS 1,870,000" 
                content="Toyota RkR"/>
                </Link>
                <Link to="/Car1"><MediaCard image="https://apollo-singapore.akamaized.net/v1/files/81bw06bxqetw-PK/image;s=1080x1080"  
                head="Rs 280000"
                content="Toyota Mark X 2.5 2006"/>
                </Link> 
                <Link to="/Car2">
                <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/xs2avff3e9iw1-PK/image;s=1080x1080"   
                head="RS 33,00000" 
                content="Toyota Prius 1.8 S 2010"/>
                </Link>
                <Link to="/Car3">
                <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/ossvaj8vy0vt-PK/image;s=1080x1080"   
                head="RS 1,870,000" 
                content="Toyota RkR"/>
                </Link> <Link to="/Car1"><MediaCard image="https://apollo-singapore.akamaized.net/v1/files/81bw06bxqetw-PK/image;s=1080x1080"  
                head="Rs 280000"
                content="Toyota Mark X 2.5 2006"/>
                </Link> 
                <Link to="/Car2">
                <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/xs2avff3e9iw1-PK/image;s=1080x1080"   
                head="RS 33,00000" 
                content="Toyota Prius 1.8 S 2010"/>
                </Link>
                <Link to="/Car3">
                <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/ossvaj8vy0vt-PK/image;s=1080x1080"   
                head="RS 1,870,000" 
                content="Toyota RkR"/>
                </Link> <Link to="/Car1"><MediaCard image="https://apollo-singapore.akamaized.net/v1/files/81bw06bxqetw-PK/image;s=1080x1080"  
                head="Rs 280000"
                content="Toyota Mark X 2.5 2006"/>
                </Link> 
                <Link to="/Car2">
                <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/xs2avff3e9iw1-PK/image;s=1080x1080"   
                head="RS 33,00000" 
                content="Toyota Prius 1.8 S 2010"/>
                </Link>
                <Link to="/Car3">
                <MediaCard image="https://apollo-singapore.akamaized.net/v1/files/ossvaj8vy0vt-PK/image;s=1080x1080"   
                head="RS 1,870,000" 
                content="Toyota RkR"/>
                </Link>
                


            </div>





            </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Cars