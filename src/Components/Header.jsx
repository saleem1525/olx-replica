import React from "react"
import logoImage from "../images/olx_logo.png"
import { Navbar, Nav, Form, FormControl, Button, InputGroup, NavDropdown } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import selling from "../images/sell_logo.png"
import top from "../images/top_img.png"
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../App.css"
import Poping from "./Login"


class Header extends React.Component {
  render() {
    
    return (
      <div style={{ marginBottom: "30px" }} >
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home"><Link to="/"><img src={logoImage} width="70px" /></Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Autocomplete
              id="combo-box-demo"
              options={[
                { title: "Pakistan" },
                { title: "Sindh" },
                { title: "Punjab" },
                { title: "Balochistan" },
                { title: "Khyber Pakhtunkhwa" },
                { title: "Islamabad" },
                { title: "Azad Kashmir" },
              ]}
              getOptionLabel={(option) => option.title}
              style={{ width: 240 }}
              renderInput={(params) => <TextField {...params} placeholder="Pakistan" variant="outlined" />} />
            <InputGroup style={{ marginLeft: "40px", width: "600px" }} className="mb-3" >
              <FormControl className="form-control-lg"
                placeholder="Find Cars , Mobile phones and more..."
                aria-label="Find Cars , Mobile phones and more..."
                aria-describedby="basic-addon2" />
              <InputGroup.Append>
                <Button className="btn btn-dark"><SearchIcon /></Button>
              </InputGroup.Append>
            </InputGroup>
            <Nav.Link style={{ marginLeft: "10px" }}> <u> <Poping/>
              </u></Nav.Link>
            <Link to="/Sell"><img width="120px" height="45px" style={{ marginLeft: "40px" }} src={selling} alt="" /></Link>
          </Nav>
        </Navbar>

        <Navbar bg="white" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="All Category" id="basic-nav-dropdown">
                <Nav.Link >
                  <Link to="/MobilePhone">Mobile Phones</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Cars">Cars</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Motorcycles">Motorcycles</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Houses">Houses</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/TVAudioVideo">TV-Audio-Video</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Tablets">Tablets</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Landsandplots">Lands and plots</Link>
                </Nav.Link>

              </NavDropdown>

              <Nav.Link >
                <Link to="/MobilePhone">Mobile Phones</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Cars">Cars</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Motorcycles">Motorcycles</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Houses">Houses</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/TVAudioVideo">TV-Audio-Video</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Tablets">Tablets</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Landsandplots">Lands and plots</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <img src={top} width="100%" />
      </div>
    )
  }
}



export default Header