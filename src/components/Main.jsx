import React, {useState, useEffect} from "react";
import {Navbar, AllPuppies, Searchbar, SinglePuppy, PuppyDaTails } from "./";

const Main = () => {
const [puppyData, setPuppyData] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [selectedPuppy, setSelectedPuppy] = useState({});

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

  function filterPuppyData () {
    if (!searchTerm) {
      return puppyData;
    } else {
      return puppyData.filter ((puppy) => {
        return puppy.name.toLowerCase() ===
        searchTerm.toLowerCase();
      })
    }
  }


  return (
    <div id="main">
      
      <div id="container">
      
      <Searchbar setSearchTerm = {setSearchTerm}/>
      {selectedPuppy.id ? (
        <PuppyDaTails
          selectedPuppy={selectedPuppy}
          setSelectedPuppy={setSelectedPuppy}/>
      ): (
      <AllPuppies puppyData = {filterPuppyData()}
      setPuppyData={setPuppyData}/>
      
      )}
    </div>
    </div>
  );
};

export default Main;
