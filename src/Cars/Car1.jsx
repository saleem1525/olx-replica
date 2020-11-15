import React from 'react';
import SwipeableTextMobileStepper from '../Components/CardPage.jsx';


class Car1 extends React.Component {
    render() {
        return (
            <div>
                <SwipeableTextMobileStepper
                    image1='https://apollo-singapore.akamaized.net/v1/files/81bw06bxqetw-PK/image;s=1080x1080'
                    image2='https://apollo-singapore.akamaized.net/v1/files/kv0bbrv2sxd73-PK/image;s=1080x1080'
                    image3='https://apollo-singapore.akamaized.net/v1/files/bi3py6bu8yzn2-PK/image;s=1080x1080'
                    image4='https://apollo-singapore.akamaized.net/v1/files/4wg1apauj4ky2-PK/image;s=1080x1080'
                    price="Rs 280000"
                    text1='Make: Toyota'
                    text2='Model: Mark X'
                    text3='Year: 2006'
                    description1='Toyota Mark X 2.5 2006 is up for sale. The car’s total specifications and physical condition is mentioned and described below in the following points: -'
                    description2='• Original registration book, both number plates available

                    • Duplex gear transmission
                    
                    • Climate Control A/C
                    
                    • Retractable Side Mirrors
                    
                    • Interior, exterior is good
                    
                    • 154874 KM driven up till now
                    
                    • Registered City: Karachi'
                    description3='Visit us at any of the following Carfirst Sales

                    Plot, gate # 1, old bulb factory, near hamza qausia lawn & edhi center, hassan square Karachi., Karachi
                    
                    Call Timings: 11: 00 AM to 7:30 PM'
                    productName='Toyota Mark X 2.5 2006'
                    productDetails='2006 - 154,874 km'
                    date='Yesterday'
                    sellerName='CarFirst Sales Centre'
                    dateIssue='since Feb 2019'
                    address='Khalid Bin Walid Road, Karachi, Sindh'
                />
            </div>

        )
    }
}

export default Car1;