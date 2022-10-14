import React, { useEffect,useState } from "react"
import {Link, useParams} from 'react-router-dom'
const PuppyDaTails = (props) => {
    const {id} = useParams()
    const [puppy, setPuppy] = useState({})
    useEffect(() => {

    }, [])


    return (
        <div className='box'>
            {`This is your PuppyDetails Component`}
            <Link to='/puppies'>Go Back</Link>
        </div>
    )
} 


export default PuppyDaTails 