import React from 'react';
import {Link} from "react-router-dom"

const SinglePuppy = (props) => {
    const puppy = props.puppy
    return (
        <div key={`player-${puppy.id}`} className="puppy">
                        <div>{'#'+ puppy.id}</div>
                        <div>{puppy.name}</div>
                        <img id='puppyImg' src={puppy.imageUrl} alt="image" height={400} width={300}></img>
                        <Link to={`/PuppyDaTails/${puppy.id}`}><button>Puppy Da Tails</button></Link>
                        <Link to='/'><button>Delete From Roster</button></Link>
                        <Link to= {`/${puppy.id}`}></Link>
                    </div>
    )
}


export default SinglePuppy 