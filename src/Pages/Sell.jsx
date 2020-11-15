import React from "react"
import { Component } from "react";
import {Button} from "react-bootstrap"

import {Link} from "react-router-dom" 

  class Sell extends Component {

    render() {
      return (
        <div style={{ marginTop: "100px", marginLeft: "80px", marginRight: "80px", }}>
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>POST AN AD</h1>
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Mobiles  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Vehicles  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Property for Sale  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Property for Rent  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Electronics and Home Appliances  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Bikes  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Business, Industrial and Agriculture  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Services  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Jobs  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Animals </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Fashion and Beauty  </Button></Link> <br />
          <Link to="/SellForm"> <Button variant="outline-secondary" style={{ paddingLeft: "20px", paddingRight: "100px", marginBottom: "10px" }} >Kids </Button></Link> <br />
        </div>

      )
      }
  }

export default Sell