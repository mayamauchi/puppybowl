import React, {useState} from "react";
import { Navbar } from "./";

const puppyData = [
  {"id": 2, "name": "Crumpet", },
  {"id": 4, "name": "Daphne", },
  {"id": 10, "name": "Kenny", },

]

const Main = () => {
const [data, setData] = useState(puppyData);
  return (
    <div id="main">
      
      <div id="container">
      <Navbar data = {data}/>
      </div>
    </div>
  );
};

export default Main;
