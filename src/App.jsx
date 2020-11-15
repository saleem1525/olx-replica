import React, { Component } from "react";
import AppRouter from "./config/router.jsx";
import Home from "./Pages/Home.jsx"
import "./App.css"


class App extends Component{
  render(){
    return(
      <div>
        <AppRouter>
        <Home />
        
        </AppRouter>
      </div>
    )
  }
}

export default App;