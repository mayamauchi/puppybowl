import React, {useState, useEffect} from "react";
import {Navbar, AllPuppies } from "./";

const Main = () => {
const [puppyData, setPuppyData] = useState([]);
  useEffect (() => {
    async function getPuppyData() {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players')
      const result = await response.json()
      const puppies = result.data.players
      setPuppyData(puppies)
    }
    getPuppyData()
  }, []
  )



// puppyData.map((e) => {
//   console.log(e)
// })

  return (
    <div id="main">
      
      <div id="container">
      <Navbar />
      <AllPuppies puppyData = {puppyData}/>
      </div>
    </div>
  );
};

export default Main;
