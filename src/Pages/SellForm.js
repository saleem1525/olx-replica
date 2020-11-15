import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap"


class SellForm extends Component {
    render() {
        return (

            <
            Form style = {
                { margin: "50px" } } >
            <
            h1 style = {
                { textAlign: "center", marginBottom: "50px" } } > POST YOUR AD < /h1> <
            Form.Row >
            <
            Form.Group as = { Col }
            controlId = "formGridName" >
            <
            Form.Label > Seller Name < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Seller Name" / >
            <
            /Form.Group>

            <
            Form.Group as = { Col }
            controlId = "formGridEmail" >
            <
            Form.Label > Email < /Form.Label> <
            Form.Control type = "email"
            placeholder = "Enter email" / >
            <
            /Form.Group> <
            Form.Group as = { Col }
            controlId = "formGridProduct" >
            <
            Form.Label > Product Name < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Product Name" / >
            <
            /Form.Group> <
            Form.Group as = { Col }
            controlId = "formGridDetail" >
            <
            Form.Label > Product Detail < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Product Detail" / >
            <
            /Form.Group>


            <
            /Form.Row> <
            Form.Row >
            <
            Form.Group as = { Col }
            controlId = "formGridCity" >
            <
            Form.Label > City < /Form.Label> <
            Form.Control / >
            <
            /Form.Group>

            <
            Form.Group as = { Col }
            controlId = "formGridProvince" >
            <
            Form.Label > Province < /Form.Label> <
            Form.Control / >
            <
            /Form.Group>

            <
            /Form.Row> <
            Form.Row >
            <
            Form.Group as = { Col }
            controlId = "formGridMAke" >
            <
            Form.Label > Make < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Make" / >
            <
            /Form.Group> <
            Form.Group as = { Col }
            controlId = "formGridModel" >
            <
            Form.Label > Model < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Model" / >
            <
            /Form.Group> <
            Form.Group as = { Col }
            controlId = "formGridPrice" >
            <
            Form.Label > Price < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Price" / >
            <
            /Form.Group> <
            /Form.Row>

            <
            Form.Group controlId = "formGridAddress" >
            <
            Form.Label > Address < /Form.Label> <
            Form.Control type = "text"
            placeholder = "Address" / >
            <
            /Form.Group>




            <
            Form.Group controlId = "formGridDescription" >
            <
            Form.Label > Description < /Form.Label> <
            Form.Control placeholder = "Full description" / >
            <
            /Form.Group> <
            br / >
            <
            Form.Group >
            <
            Form.File id = "exampleFormControlFile1"
            label = "Upload images of Product" / >
            <
            /Form.Group>

            <
            br / >
            <
            Button variant = "primary"
            type = "submit" >
            Submit <
            /Button> <
            /Form>
        )
    }

}

export default SellForm;