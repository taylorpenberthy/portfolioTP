import React, { Component } from 'react';
import screenshot from './trivia1_macbookgold_front.png';
import sounddump from './sounddumpreal_macbookgold_front.png';
import beer from './yeetbeer_macbookgold_front.png';
import sounddumpmobile from './sounddumpmobile.png'
class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='hero'>
          <h1 className='projectstitle'>PROJECTS</h1>
        </div>
        <div className='projects'>
          <div className='projectCard'>
            <div className='imagewrap'>
              <a
                href='https://taylorpenberthy.github.io/projectOneFinal/'
                target='_blank'
              >
                <img src={screenshot} className='projectImages' />
              </a>
            </div>
            <div className='overlay'>
              <p style={{textAlign: 'center'}}> Learn more about Taylor!</p>

              <div className='technologies'>
                <img
                  src='https://www.xhtmljunction.com/blog/wp-content/uploads/2018/02/html5-css3.png'
                  className='tech'
                />
                <br />
                <img
                  src='https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png'
                  className='tech'
                />
              </div>
            </div>
          </div>
          <div className='projectCard'>
            <div className='imagewrap'>
              <a href='https://sounddump.herokuapp.com' target='_blank'>
                <img src={sounddump} className='projectImages' />
              </a>
            </div>
            <div className='overlay'>
              <p>
                Search through Spotify's database and share songs with friends.
              </p>
              <div className='technologies'>
                <img
                  src='https://www.xhtmljunction.com/blog/wp-content/uploads/2018/02/html5-css3.png'
                  className='tech'
                />
                <br />
                <img
                  src='https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png'
                  className='tech'
                />
                <img
                  src='https://qph.fs.quoracdn.net/main-qimg-f406db5658b5d0dade4d70a989560439'
                  className='tech'
                />
                <br />
                <img
                  src='https://icon-library.net/images/node-js-icon/node-js-icon-29.jpg'
                  className='tech'
                />
                <img src='http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/e5eee315a17de0d7f56117077eb71fa9/mongo.png' />
              </div>
              {/* <p className='text'>
             Technologies used: Node/Express.js, MongoDB/Mongoose, HTML5, CSS3, JavaScript </p> */}
            </div>
          </div>
          <div className='projectCard'>
            <div className='imagewrap'>
              <a href='' target='_blank'>
                <img src={sounddumpmobile} className='projectImages' />
              </a>
            </div>
            <div className='overlay'>
              <p>
                Search through Spotify's database and share songs with friends.
              </p>
              <div className='technologies'>
                <img
                  src='https://www.xhtmljunction.com/blog/wp-content/uploads/2018/02/html5-css3.png'
                  className='tech'
                />
                <br />
                <img
                  src='https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png'
                  className='tech'
                />
                <img
                  src='https://qph.fs.quoracdn.net/main-qimg-f406db5658b5d0dade4d70a989560439'
                  className='tech'
                />
                <br />
                <img
                  src='https://icon-library.net/images/node-js-icon/node-js-icon-29.jpg'
                  className='tech'
                />
                <img src='http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/e5eee315a17de0d7f56117077eb71fa9/mongo.png' />
              </div>
              {/* <p className='text'>
             Technologies used: Node/Express.js, MongoDB/Mongoose, HTML5, CSS3, JavaScript </p> */}
            </div>
          </div>
          <div className='projectCard'>
            <div className='imagewrap'>
              <a href='https://yeetbeer.herokuapp.com' target='_blank'>
                <img src={beer} className='projectImages' />
              </a>
            </div>
            <div className='overlay'>
              <p>
                Generate posts to show your friends your favorite beers and
                breweries.
              </p>

              <div className='technologies'>
                <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' />
                <br />
                <img
                  src='https://www.xhtmljunction.com/blog/wp-content/uploads/2018/02/html5-css3.png'
                  className='tech'
                />
                <br />
                <img
                  src='https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png'
                  className='tech'
                />
                <img
                  src='https://qph.fs.quoracdn.net/main-qimg-f406db5658b5d0dade4d70a989560439'
                  className='tech'
                />
                <br />
                <img
                  src='https://icon-library.net/images/node-js-icon/node-js-icon-29.jpg'
                  className='tech'
                />
                <img src='http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/e5eee315a17de0d7f56117077eb71fa9/mongo.png' />
              </div>
              {/* ReactJS, Node/Express.js, MongoDB/Mongoose, HTML5, CSS3, JavaScript  */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
