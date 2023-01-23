import React from 'react'
import { Link } from 'react-router-dom'
import './persona.css'
 function Persona() {
    return (

       
         <div>

            <div className='imgall'>
<img className="Persona3" alt="" src="./Persona3.png" />

            </div>
            <Link className='p2' to="/Planning"> Go To Planning </Link>  

        </div>
        
    )
}

export default Persona;