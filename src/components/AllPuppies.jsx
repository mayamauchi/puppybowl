import  React  from 'react';
import SinglePuppy from './SinglePuppy';
const AllPuppies = (props) => {
    const myPuppies = props.puppyData
    console.log(myPuppies)
    return (
        <div className='box'>
            {myPuppies.length ?
            myPuppies.map((puppy) => {
                return (
                   <div key={`player-${puppy.id}`}><SinglePuppy  puppy={puppy}/> </div>
            
                    
            )}
            ): <div>Loading the Cutest of Puppies</div>}
        </div>
        
    )
}
        
        




export default AllPuppies; 