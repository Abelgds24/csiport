import React from 'react'
import { Link } from 'react-router-dom'
import './persona.css'
 function Persona() {
    return (

       
         <div>

            <div className='imgall'>
<img className="Persona2" alt="" src="./Persona2.png" />

            </div>
            <Link className='p2' to="/Persona3"> Next Persona </Link>  

        </div>
        
    )
}

export default Persona;