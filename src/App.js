
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


import Home from './pages/home'
import create from './pages/create';
import Nav from './components/Nav';
import Box from '@material-ui/core/Box'

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Box m={2} >
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/create" exact component={create}></Route>
        </Switch>
      </Box>
    </BrowserRouter>
  )
}

export default App;
