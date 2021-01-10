import react from 'react'
import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'

import './Nav.css'

export default () => {
  const location = useLocation();  
  console.log(location.pathname);
  return (
    <div className="Nav">
       <header className="App-header">
        <h1>🐱 Cats Blog 🐱 </h1>
        {location.pathname === '/' ? <Link to="/create" exact><span className="router-link">Create &#8594;</span></Link>  : <Link to="/" exact><span className="router-link">List &#8594;</span></Link> }
      </header>
    </div>
  )
   
      
}