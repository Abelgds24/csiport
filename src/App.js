import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Insight from './Insight'
import Persona from './Persona'
import Persona2 from './Persona2'
import Persona3 from './Persona3'
import Planning from './Planning'
import Reflection from './Reflection'




import { Link } from 'react-router-dom'





function App() {
  return (
    
    <div>
   <div className='Nav'> Food Retail<br></br> 
     Industry.
     <ul>
     <li><Link to="/home">Home</Link></li>
     <li> <Link  to="/Persona">Personas</Link></li>
     <li><Link  to="/Planning">Planning</Link></li>
     <li><Link  to="/Reflection">Reflection</Link></li>
     </ul>
     </div>
   <Routes>
    <Route exact path='/insight1' element={<Insight text='First Insight' />}></Route>
    <Route exact path='/insight2' element={<Insight text='Second Insight' />}></Route>
    <Route exact path='/home' element={<Home />}></Route>
    <Route exact path='/Persona' element={<Persona />}></Route>
    <Route exact path='/Persona2' element={<Persona2 />}></Route>
    <Route exact path='/Persona3' element={<Persona3 />}></Route>
    <Route exact path='/Planning' element={<Planning />}></Route>
    <Route exact path='/Reflection' element={<Reflection />}></Route>




   </Routes>
   {/* <div className='footer'> <ul><li>Abel Elias</li>
   <li>abelelias2024@gmail.com</li>
   <li>301-316-8299</li>
   <li>Georgetown Day School</li></ul></div> */}
   
   </div>

  );
}


export default App;
