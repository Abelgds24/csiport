import React from 'react'
import { Link } from 'react-router-dom'
import './persona.css'
 function Persona() {
    return (

       
         <div>

            <div className='blurb3'>A <span>Persona</span> is an aspect of someone's <span>character</span> that is <span>presented</span> to or <span>perceived</span> by others.</div>
            <div className='imgall'>
<img className="Persona1" alt="" src="./Persona1.png" />
{/* <img className="Persona2" alt="" src="./Persona2.png" />
<img className="Persona3" alt="" src="./Persona3.png" /> */}
            </div>
            <Link className='p2' to="/Persona2"> Next Persona </Link>  

        </div>
        
    )
}

export default Persona;