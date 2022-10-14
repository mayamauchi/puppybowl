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
                        <div>{'#'+ puppy.id}</div>
                        <div>{puppy.name}</div>
                        <div>{puppy.breed}</div>
                        <div>{puppy.status}</div>
                        <img id='puppyImg' src={puppy.imageUrl} alt="image" height={400} width={300}></img>
                        {/* <div>{puppy.imageUrl}</div> */}
                    </div>
                    
            )}
            ): <div>Loading the Cutest of Puppies</div>}
        </div>
        
    )
}
        
        




export default AllPuppies; 