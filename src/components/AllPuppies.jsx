import  React  from 'react';

const AllPuppies = (props) => {
    const myPuppies = props.puppyData
    console.log(myPuppies)
    return (
        <div className='box'>
            {myPuppies.length ?
            myPuppies.map((puppy) => {
                return (
                    <div key={`player-${puppy.id}`} className="puppy">
                        <div>{puppy.name}</div>
                    </div>
                    
            )}
            ): <div>Loading the Cutest of Puppies</div>}
        </div>
        
    )
}
        
        




export default AllPuppies; 