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
          <div className='mover'>
            <img src={me2} alt='myface' className='mover' />
          </div>
        </div>
        <div className='hero'>
          <h1 className='projectstitle'>WHO AM I?</h1>
        </div>
        <div className='profilepic'>
          <img src={me} className='propic' />
          <p className='description'>
            I'm Taylor. I'm a software engineer with a passion for music,
            baking, coding, and exercise (among other things).
            <br />
            I've built multiple fullstack applications using the latest
            technologies, languages, and tools to develop meaningful projects.
            <br />
            The application and implementation of technology in science and
            healthcare fascinates me and encourages me to reimagine medicine
            through a technological perspective.
          </p>
        </div>
        <div className='songbox'>
          <h5>Peep my current favorite song!</h5>
          <iframe
            src='https://open.spotify.com/embed/track/5M4yti0QxgqJieUYaEXcpw'
            width='300'
            height='80'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></iframe>
        </div>
      </div>
    );
  }
}

export default About;
