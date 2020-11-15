import React, { Component } from 'react';
import Header from "../Components/Header.jsx";
import HomeCard from "./HomeCard"
import Footer from "../Components/Footer.jsx";
import {Link} from "react-router-dom"


class Home extends Component{
  render(){
    return(
      <div>
         <Header/>
         <Link to="/Car1"><HomeCard sty image="https://apollo-singapore.akamaized.net/v1/files/81bw06bxqetw-PK/image;s=1080x1080"  
                head="Rs 280000"
                content="Toyota Mark X 2.5 2006"/>
                </Link> 
                <Link to="/Car2">
                <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/xs2avff3e9iw1-PK/image;s=1080x1080"   
                head="RS 33,00000" 
                content="Toyota Prius 1.8 S 2010"/>
                </Link>
                <Link to="/House1"> <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/pw5nj9ac7a0i2-PK/image;s=1080x1080"
                head="RS 150,000,000"
                content="Ideal Location Syed Brothers offers 2 Kanal Owner Build Spanish Design"  />
                </Link>
                <Link to="/House2"> <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/zftpwr6lm83l1-PK/image;s=1080x1080"
                head="RS 25,000,000"
                content="Spacious House 12 Marla Overseas Greens Sector3 Bahria Town Rawalpindi"  />
                </Link>
               <Link to="/Mobile1">
            <HomeCard image="https://apollo-singapore.akamaized.net:443/v1/files/oe34i8hhqusq3-PK/image;s=280x0;q=60 320w" 
                head="Rs 38,000" 
                content="Infinix Zero 8 (8GB 128GB) Box Pack 64MP Back 44MP Front Fast Charging" /></Link>
                <Link to="/Mobile2">
                <HomeCard image="https://apollo-singapore.akamaized.net:443/v1/files/lzhtf5uk4enu2-PK/image;s=280x0;q=60 320w" 
                  head="Rs 25,000" 
                content="Lg g7 g8 (v40 128gb) v50 all lg model aveilable price info description"/>
                </Link>
                <Link to="/Land1" > <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/5y4q2zwtonb1-PK/image;s=1080x1080"
               head="RS 8,000,000"
               content="House Is Available For Sale In Wapda Town Phase 1 - Block F1 Lahore" />
               </Link>
               <Link to="/Land2" > <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/vcq8jp8ad7qd3-PK/image;s=1080x1080"
               head="RS 5,700,000"
               content="Plot for sale in I-14/3" />
               </Link>
               <Link to="/Cycle1"> <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/0484r3gdb4nn3-PK/image;s=1080x1080"
                head="RS 480,000"
                content="Used 250 Dual cylinder at shaukat autos" />
                </Link>
                <Link to="/Cycle2"> <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/0vej79r6k1rh3-PK/image;s=1080x1080"
                head="RS 550,000"
                content="Bullet 1 Motorsports 250ccDual cylinder" />
                </Link> 
                <Link to="/Tablet1"><HomeCard image="https://apollo-singapore.akamaized.net/v1/files/tk8m8scrccq-PK/image;s=1080x1080"
                head="RS 18,500"
                content="Kyocera Qua Tab (Original Japan Stock) 3GB 32GB Android 8.0 Brand New" />
                </Link>
                <Link to="/Tablet2"> <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/0j9vb0oo93mn3-PK/image;s=1080x1080"
                head="RS 21,999"
                content="Lenovo Tablet E10 3gb 32gb PUBG SUPPORTED GAMING TABLET DELIVERY" />
                </Link>
                <Link to="Tv1"> <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/56k2grls2rbk1-PK/image;s=1080x1080"
                head="RS 15,800"
                content="Wamaa 32 Simple -LED TV" />
                </Link>
                <Link to="Tv2"> <HomeCard image="https://apollo-singapore.akamaized.net/v1/files/p6pw23z4davf-PK/image;s=1080x1080"
                head="RS 38,500"
                content="Box Pack Samsung 55 Smart Android Full HD 1080p Built in Woofer" />
                </Link> 
                

         
         <Footer/>
      </div>


    )
  }
}

export default Home;