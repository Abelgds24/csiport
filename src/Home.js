import React from 'react'
 import { Link } from 'react-router-dom'
 import './Home.css';

 function Home() {
     return (
         <div className='all'>
         <div>
       <div className='blurb'> View the <span>journey</span>, <span>story</span> and <span>life</span> of running and <br></br>managing a cafe in  the Tenleytown-Bethesda area.</div>
      
  <Link className='link' to="/insight1"> Go to Insights </Link>  
  <img className="imgicon" alt="" src="./coffeeee.png" />

        </div>
        </div>
    )
 }


 
export default Home;


