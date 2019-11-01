import React from 'react';
import logo from './logo.svg';
import './App.css';
import Floorplan from "./Floorplan"
import Homepage from "./Homepage"
import Projects from "./Projects"
import About from "./About"

import { Link, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div>
      <nav>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <h4>Home</h4>
        </Link>
        <Link to ={process.env.PUBLIC_URL + '/projects'}>
          <h4>Projects</h4>
        </Link>
        <Link to={process.env.PUBLIC_URL + "/about"}>
          <h4>About</h4>
        </Link>
      </nav>
        
    <main>
      
      <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Floorplan}/>
      <Route exact path={process.env.PUBLIC_URL + "/projects"} component={Projects}/> 
      <Route exact path={process.env.PUBLIC_URL + "/about"}component={About}/>  
      </Switch>
    </main>
    <footer>
      {/* <a href='http://linkedin.com/in/taylorpenberthy' className='icons'><img src='http://assets.stickpng.com/thumbs/58e91afdeb97430e81906504.png' className='icons'/></a>
      <a href='http://github.com/taylorpenberthy' className='icons'><img src='https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg' className='icons'/></a> */}
    </footer>
    </div>
    
    
  );
}

export default App;
