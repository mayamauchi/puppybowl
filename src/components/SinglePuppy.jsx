import React from 'react';
import {Link} from "react-router-dom"

const SinglePuppy = (props) => {
    const puppy = props.puppy
    return (
        <div key={`player-${puppy.id}`} className="puppy">
                        <div>{'#'+ puppy.id}</div>
                        <div>{puppy.name}</div>
                        <div>{puppy.breed}</div>
                        <div>{puppy.status}</div>
                        <img id='puppyImg' src={puppy.imageUrl} alt="image" height={400} width={300}></img>
                       <input type='button' value='See Da Tails'/>
                       <input type='button' value='Delete from Roster'/>
                        <Link to= {`/${puppy.id}`}></Link>
                    </div>
    )
}
















export default SinglePuppy 