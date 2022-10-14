import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SinglePuppy from "./SinglePuppy";

const PuppyDaTails = (props) => {
  const { id } = useParams();
  const [puppy, setPuppy] = useState({});
  useEffect(() => {
    async function getPuppy() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/${id}`
        );
        const result = await response.json();
        const puppyData = result.data.player;
        setPuppy(puppyData);
      } catch (err) {
        console.log(err);
      }
    }
    getPuppy();
  }, []);
  console.log(puppy);

  return (
    <div className="details">
      <div key={`player-${puppy.id}`} className="puppy">
        <div>{"#" + puppy.id}</div>
        <img
          id="puppyImg"
          src={puppy.imageUrl}
          alt="image"
          height={400}
          width={300}
        ></img>
        <div>{puppy.name}</div>
        <div>{puppy.breed}</div>
        <div>{puppy.status}</div>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default PuppyDaTails;
