import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
     <div className='hello-world'>
        <Link to='/signin' className='text-dark'>Hello World</Link>
    </div> 
    </>
  )
}

export default Home