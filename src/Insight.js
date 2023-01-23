import React from 'react'
import { Link } from 'react-router-dom'
import './insight.css';



function Insight(props) {
    return (
        <div>
            <div className='blurb2'>An <span>insight</span> statement is a statement that expresses a <span> deep understanding </span> of a particular topic.</div>
            <div> </div>
            <Link  to="/home">  </Link>
            <div className='dun'>
            <img className="ins1" alt="" src="./insight1.png" />
            <img className="ins2" alt="" src="./insight2.png" />
            <img className="ins3" alt="" src="./insight3.png" />

            </div>


        </div>
    )
}

export default Insight