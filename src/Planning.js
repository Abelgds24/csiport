import React from 'react'
 import { Link } from 'react-router-dom'
 import './planning.css';

 function Planning() {
    return (
        <div className='all'>
        <div>
            <div  className='planall'>

        <img className="plan1" alt="" src="./plan1.png" /> 
        
        <img className="plan2" alt="" src="./plan2.png" /> 
        <img className="plan3" alt="" src="./plan3.png" />

        
            </div> 
            <div className='desc1'> 2x2 Graph</div>
            <div className='desc2'> Attribute Spectrums</div>
            <div className='desc3'> Venn Diagram</div>


       </div>
       </div>
   )
}



export default Planning;
