
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'


import Home from './pages/home'
import create from './pages/create';
import Nav from './components/Nav';

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/create" exact component={create}></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
