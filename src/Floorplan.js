import React, { Component } from "react"
import "./App.css"
import me from "./moi circle.png"
class Floorplan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: true
        }
    }
    
    render() { 
       
            return ( 
                <div>
                <h1>TP</h1>
                <h3>(not the<img src="https://www.stickpng.com/assets/images/589395bc8370b70e212f3e63.png"></img>)</h3>
                <div>
               
                </div>
                <div className='icons1'>
                <a href='http://linkedin.com/in/taylorpenberthy' className='icons'><img src='http://assets.stickpng.com/thumbs/58e91afdeb97430e81906504.png' className='icons'/></a>
      <a href='http://github.com/taylorpenberthy' className='icons'><img src='https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg' className='icons'/></a></div>
                </div>
         
             )
        
    }
}

export default Floorplan;