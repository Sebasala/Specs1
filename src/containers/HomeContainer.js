import React, { Component } from 'react';
import { createGIF } from 'gifshot';
import { videoBase64 } from '../helpers/video';

class HomeContainer extends Component {

  componentDidMount() {
    //const { history } = this.props;
    //history.push('/login');
    
  }

  handleImageChange = event => {
    const file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (event) => {
      const content = fileReader.result;
      createGIF({
        video: [
          content
        ],
        interval: 1.5,
        numFrames: 10,
        frameDuration: 3,
        sampleInterval: 10,
      }, (obj) => {
        if (!obj.error) {
          var image = obj.image,
            animatedImage = document.getElementById('animatedGIF');
          animatedImage.src = image;
        }
      });
    };
    fileReader.readAsDataURL(file);
  }

  render() {
    return (
      <div>
        <h1>Home Specs</h1>
        <div id='preview'>
          <img id='animatedGIF' alt='gif'/>
          <input type='file' name='image' onChange={this.handleImageChange} />
        </div>
      </div>
    );
  }
}

export default HomeContainer;