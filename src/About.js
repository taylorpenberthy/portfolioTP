import React, { Component } from 'react';
import me from './moi.jpg';
import me2 from './moi circle.png';
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='container'>
          {/* <div className='mover'>
            <img src={me2} alt='myface' className='mover' />
          </div> */}
        </div>
        <div className='hero'>
          <h1 className='projectstitle'>WHO AM I?</h1>
        </div>
        <div className='profilepic'>
          <img src={me} className='propic' />
          <p className='description'>
            I am a software developer who has built projects that align with my interests in music,
            baking, and exercise (among other things, I'm not THAT boring).
            <br />
            I've built multiple fullstack applications using the latest
            technologies, languages, and tools to develop meaningful projects.
            <br />
            The application and implementation of technology in science and
            healthcare fascinates me and encourages me to reimagine medicine
            through a technological perspective.  
          </p>
        </div>
        <div className='bottomofprojpage'>
       
          <div className='songbox'>
          <iframe
            src='https://open.spotify.com/embed/track/5M4yti0QxgqJieUYaEXcpw'
            width='80'
            height='80'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></iframe>

        </div>
        
        <div className='contactbox'>
         <a className='child' href='mailto:taylor.penberthy@gmail.com'><div className='child'>Contact Me!</div></a>
        {/* <h5>Contact Me!</h5> */}
{/*           
          <iframe
            src='https://open.spotify.com/embed/track/5M4yti0QxgqJieUYaEXcpw'
            width='300'
            height='80'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></iframe> */}
        </div>
        </div>
      </div>
    );
  }
}

export default About;
