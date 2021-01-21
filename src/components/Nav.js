import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ActionButton } from '../theming/theme'
import Box from '@material-ui/core/Box';

import './Nav.css'

const Nav = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="Nav">
      <header className="App-header">
        <Box p="2rem"  textAlign='center'>
          <h1>🐱 Cats Blog 🐱 </h1>
          {location.pathname === '/' ? <Link to="/create" ><ActionButton mx="auto">Create</ActionButton></Link> : <Link to="/"><ActionButton>List</ActionButton></Link>}
        </Box>
      </header>
    </div>
  )


}
export default Nav;