import React, { useEffect,useState } from "react"
import {Link, useParams} from 'react-router-dom'
import SinglePuppy from './SinglePuppy';

const PuppyDaTails = (props) => {
    const {id} = useParams()
    const [puppy, setPuppy] = useState({})
    useEffect(() => {
        async function getPuppy() {try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/');
      const result= await response.json();
      const puppyData = result.data.player
    //   setPuppy (puppyData)
      console.log(result);
        } catch (err) {
            console.log(err);
        }

        }
        getPuppy();
    }, [])


    return (
        <div className='details'>
            <SinglePuppy puppy={puppy}/>
            <div key={`player-${puppy.id}`} className="puppy">
                        <div>{puppy.id}</div>
                        <div>{puppy.name}</div>
                        <div>{puppy.breed}</div>
                        <div>{puppy.status}</div>
                        
                    </div>
            <Link to='/'><button>Go Back</button></Link>
            
        </div>
    )
} 


export default PuppyDaTails 