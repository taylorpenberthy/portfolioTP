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
                <a href='http://linkedin.com/in/taylorpenberthy' className='icons'><i class="fab fa-linkedin fa-lg" style={{color: "#F5E6E8"}}></i></a>
                <a href='http://github.com/taylorpenberthy' className='icons'><i class="fab fa-github fa-lg" style={{color: "#F5E6E8"}} size="10px"></i></a></div>
                </div>
         
             )
        
    }
}

export default Floorplan;