import React, {useState} from "react";
import { Navbar } from "./";

const puppies = [
  {"id": 2, "name": "Crumpet", },
  {"id": 4, "name": "Daphne", },
  {"id": 10, "name": "Kenny", },

]

const Main = () => {
const [puppyData, setPuppyData] = useState(puppies);




puppyData.map((e) => {
  console.log(e)
})

  return (
    <div id="main">
      
      <div id="container">
      <Navbar puppyData = {puppyData}/>
      </div>
    </div>
  );
};

export default Main;
