import React from "react";
import Container from "./components/Container";

// Default Values Goes Here . You can keep it in a seperate file . I am keeping it just here
// Global Configurations.
const totalClicks = 6;
const currentClicks = 0;
const speed = 2; // NOt being used at this moment
const containers = [
  {id : 'container1' , isClicked : false},
  {id : 'container2' , isClicked : false},
  {id : 'container3' , isClicked : false},
  {id : 'container4' , isClicked : false},
  {id : 'container5' , isClicked : false},
  {id : 'container6' , isClicked : false},
  {id : 'container7' , isClicked : false},
  {id : 'container8' , isClicked : false},
];


const App = ()=>{
  
  return (<React.Fragment>
    <Container totalClicks = {totalClicks} speed={speed} currentClicks={currentClicks} containers={containers}/>
  </React.Fragment>);
}

export default App;
